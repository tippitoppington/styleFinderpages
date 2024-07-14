import { useEffect, useCallback } from 'react';

export const useInspoEffects = (contentRef, inspo) => {
	const updateCTA = useCallback(
		(tID) => {
			if (!inspo) return; // Early return if inspo is undefined
			const cta = document.querySelector('.cta-container');
			const trendData = inspo.find((item) => item.trendId === tID);

			if (trendData && cta) {
				inspo.forEach((item) => cta.classList.remove(item.color));
				cta.innerHTML = `<h1 class="trend-cta"><a href="#">Shop ${trendData.trendName}</a></h1>`;
				cta.classList.add(trendData.color);
			}
		},
		[inspo]
	);

	useEffect(() => {
		if (!contentRef.current || !inspo) return; // Early return if contentRef or inspo is not available

		const gridItems = Array.from(
			contentRef.current.querySelectorAll('.item-container')
		);

		// Randomize animation delay
		gridItems.forEach(
			(item) => (item.style.animationDelay = `${Math.random() * 0.8 + 0.2}s`)
		);

		// Function to check if element is in viewport
		const inViewPort = (el) => {
			const rect = el.getBoundingClientRect();
			return (
				(rect.top <= 0 && rect.bottom >= 0) ||
				(rect.bottom >= window.innerHeight && rect.top <= window.innerHeight) ||
				(rect.top >= 0 && rect.bottom <= window.innerHeight)
			);
		};

		// Function to show products
		const showProducts = () => {
			gridItems.forEach((item) => {
				if (inViewPort(item)) {
					const tID = item.dataset.oftrend;
					updateCTA(tID);
					item.classList.add('appear');
				} else {
					item.classList.remove('appear');
				}
			});

			window.requestAnimationFrame(showProducts);
		};

		const animationFrame = window.requestAnimationFrame(showProducts);

		// Cleanup function
		return () => {
			window.cancelAnimationFrame(animationFrame);
		};
	}, [contentRef, inspo, updateCTA]);
};
