import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';

function App() {
	const cart = useSelector(state => state.cart);

	useEffect(() => {
		fetch('https://appseven-9144b-default-rtdb.firebaseio.com/cart.json', {
			method: 'PUT',
			body: JSON.stringify(cart),
		});
	}, [cart]);

	const showCart = useSelector(state => state.ui.cartIsVisible);
	return (
		<Layout>
			{showCart && <Cart />}
			<Products />
		</Layout>
	);
}

export default App;
