import { ReactNode, createContext, useContext, useState } from 'react';
import { ProductCategory, ProductsData, UserFormData } from '../types';
import { findDefaultVariant } from '../utils';

type AppContextType = {
	selectedProductCategory: ProductCategory | null;
	userContactData: UserFormData | null;
	selectedVariant: ProductsData | null;
	handleCategoryChange: (productCategory: ProductCategory) => void;
	handleFormChange: (field: string, value: string) => void;
	handleVariantChange: (productVariant: ProductsData) => void;
	resetStore: () => void;
};

const AppContext = createContext<AppContextType | null>(null);

const AppProvider = ({ children }: { children: ReactNode }) => {
	const [selectedProductCategory, setSelectedProductCategory] =
		useState<ProductCategory | null>(null);
	const [selectedVariant, setSelectedVariant] = useState<ProductsData | null>(
		null
	);
	const [userContactData, setUserContactData] = useState<UserFormData>({
		firstName: '',
		lastName: '',
		phone: '',
		email: '',
	});

	const handleCategoryChange = (productCategory: ProductCategory) => {
		const defaultVariantId =
			productCategory.relationships.default_product.data.id;
		const productVariants = productCategory.relationships.products.data;

		// Select the Default variant or if null the first variant of the list
		const defaultProduct =
			findDefaultVariant(defaultVariantId, productVariants) ||
			productVariants.sort((a: ProductsData, b: ProductsData) =>
				a.name.localeCompare(b.name)
			)[0];

		// When a Category is selected, we set the default variant as well
		setSelectedVariant(defaultProduct as ProductsData);
		setSelectedProductCategory(productCategory);
	};

	const handleVariantChange = (productVariant: ProductsData) => {
		setSelectedVariant(productVariant);
	};

	const handleFormChange = (field: string, value: string) => {
		setUserContactData(prevData => ({
			...prevData,
			[field]: value,
		}));
	};

	const resetStore = () => {
		setSelectedVariant(null);
		setSelectedProductCategory(null);
		setUserContactData({
			firstName: '',
			lastName: '',
			phone: '',
			email: '',
		});
	};

	return (
		<AppContext.Provider
			value={{
				selectedProductCategory,
				handleCategoryChange,
				userContactData,
				handleFormChange,
				selectedVariant,
				handleVariantChange,
				resetStore,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};

const useAppContext = () => {
	const context = useContext(AppContext);
	if (!context) {
		throw new Error('useAppContext must be used within a AppProvider');
	}
	return context;
};

export { AppProvider, useAppContext };
