import React, { useEffect, useState } from 'react';

const useCarousel = (numSlides, interval = 3000) => {
	const [currentIndex, setCurrentIndex] = useState(0);

	useEffect(() => {
		const nextSlide = () => {
			setCurrentIndex((prevIndex) => (prevIndex + 1) % numSlides);
		};

		const id = setInterval(nextSlide, interval);
		return () => clearInterval(id);
	}, [numSlides, interval]);

	return currentIndex;
};

const Trend = ({ trend }) => {
	const maxImages = Math.max(
		...trend.products.map((product) =>
			Array.isArray(product.image) ? product.image.length : 1
		)
	);

	const currentIndex = useCarousel(maxImages);

	return (
		<div className='trend-block' data-trendid={trend.trendId}>
			{trend.products.map((product) => {
				const images = Array.isArray(product.image)
					? product.image
					: [product.image];

				return (
					<div
						key={product.pid}
						className={`item-container ${product.orientation}`}
						data-oftrend={trend.trendId}>
						<div className='carousel'>
							{images.map((imageSrc, index) => (
								<div
									key={index}
									className={`carousel-slide ${
										index === currentIndex % images.length ? 'active' : ''
									}`}>
									<img
										src={`${process.env.PUBLIC_URL}${imageSrc}`}
										alt={`${product.productName || 'Product Image'} ${
											index + 1
										}`}
									/>
								</div>
							))}
							<div className='carousel-dots'>
								{images.map((_, index) => (
									<span
										key={index}
										className={`carousel-dot ${
											index === currentIndex % images.length ? 'active' : ''
										}`}></span>
								))}
							</div>
						</div>
						{product.productName && (
							<>
								<p>
									{product.brand}
									<br />
									{product.productName}
								</p>
								<p className='sale-price'>
									<span className='price'>{product.price}</span>{' '}
									{product.saleprice}
								</p>
							</>
						)}
					</div>
				);
			})}
		</div>
	);
};

export default Trend;
