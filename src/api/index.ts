export const fetchProductCategories = async () => {
	const response = await fetch('/api/product_categories');

	if (!response.ok) {
		throw new Error('Failed to fetch product categories');
	}

	const categories = await response.json();

	return categories;
};
