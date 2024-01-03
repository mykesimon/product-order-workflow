import { PathConstants } from './pathConstants';

import WelcomeScreen from '../screens/WelcomeScreen';
import CategoriesScreen from '../screens/CategoriesScreen';
import ProductsScreen from '../screens/ProductsScreen';
import UserContactDataScreen from '../screens/UserContactDataScreen';
import ReviewAndPayScreen from '../screens/ReviewAndPayScreen';
import ConfirmationScreen from '../screens/ConfirmationScreen';

export const routes = [
	{
		path: '/',
		element: <WelcomeScreen />,
	},
	{
		path: `:userId/${PathConstants.USER_SELECTED_CATEGORIES}`,
		element: <CategoriesScreen />,
	},
	{
		path: `:userId/${PathConstants.USER_SELECTED_PRODUCTS}`,
		element: <ProductsScreen />,
	},
	{
		path: `:userId/${PathConstants.USER_CONTACT_DATA}`,
		element: <UserContactDataScreen />,
	},
	{
		path: `:userId/${PathConstants.USER_SUBMITTED_ORDER}`,
		element: <ReviewAndPayScreen />,
	},
	{
		path: `:userId/${PathConstants.USER_CONFIRMATION}`,
		element: <ConfirmationScreen />,
	},
];

export default routes;
