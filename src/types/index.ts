export type ProductCategoryAttributes = {
	name: string;
	slug: string;
	default_product_id: string;
	active: boolean;
	allow_multiple_subscriptions: boolean;
	position: number;
	code: string;
};

export type ProductsData = {
	id: string;
	type: string;
	name: string;
	slug: string;
	cost: string;
};

export type ProductCategoryRelationships = {
	default_product: {
		data: {
			id: string;
			type: string;
		};
	};
	products: {
		data: ProductsData[];
	};
};

export type ProductCategory = {
	id: string;
	type: string;
	attributes: ProductCategoryAttributes;
	relationships: ProductCategoryRelationships;
};

export type UserFormData = {
	firstName: string;
	lastName: string;
	phone: string;
	email: string;
};
