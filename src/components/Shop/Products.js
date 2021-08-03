import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS = [
	{
		id: 'p1',
		price: 6,
		title: 'My First Book',
		description: 'The interesting Book',
	},
	{
		id: 'p2',
		price: 4,
		title: 'My First Love',
		description: 'The interesting Book of love',
	},
];
const Products = props => {
	return (
		<section className={classes.products}>
			<h2>Buy your favorite products</h2>
			<ul>
				{DUMMY_PRODUCTS.map(product => (
					<ProductItem
						key={product.id}
						title={product.title}
						price={product.price}
						id={product.id}
						description={product.description}
					/>
				))}
			</ul>
		</section>
	);
};

export default Products;
