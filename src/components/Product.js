import React from 'react';

const Product = ({ product }) => {
	const imageSrc = Array.isArray(product.image)
		? product.image[0]
		: product.image;

	return (
		<div className='product'>
			<img src={imageSrc} alt={product.productName || 'Product Image'} />
			{product.productName && (
				<>
					<h3>{product.productName}</h3>
					<p>{product.brand}</p>
					<p>Price: {product.price}</p>
					{product.saleprice && <p>Sale Price: {product.saleprice}</p>}
				</>
			)}
		</div>
	);
};

export default Product;
