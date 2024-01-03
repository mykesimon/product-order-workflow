import { useQuery } from 'react-query';
import { fetchProductCategories } from '../api';

const STALE_TIME = 120 * 1000; // 2 minutes

export const useFetchCategories = () => {
	const { isError, isSuccess, isLoading, data: productCategories, error } = useQuery(['product-categories'], fetchProductCategories, { refetchOnWindowFocus: false, staleTime: STALE_TIME });

	return { productCategories, isError, error, isSuccess, isLoading };
};
