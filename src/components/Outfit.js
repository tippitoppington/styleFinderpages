import React, { useMemo, useCallback } from 'react';
import ItemOptions from './ItemOptions';
import ItemList from './ItemList';
import { outfits } from '../data/outfits-data';

const Outfit = ({
	selectedOutfit,
	handleCategory,
	itemCategory,
	handleOption,
	open,
	visible,
	handleReset,
}) => {
	const outfit = useMemo(
		() => outfits.find((o) => o.id === selectedOutfit.id),
		[selectedOutfit.id]
	);

	const hideTooltip = useCallback(() => {
		const tooltip = document.querySelector('.tooltip');
		if (tooltip) tooltip.classList.add('hide');
	}, []);

	if (!outfit) {
		return <div>Error: Outfit not found</div>;
	}

	return (
		<div className='look' style={outfit.style} onClick={hideTooltip}>
			<div className='desc-container'>
				<div className='look-description'>
					<h4>{outfit.title}</h4>
					<ul>
						<li>{outfit.text1}</li>
						<li>{outfit.text2}</li>
						<li>{outfit.text3}</li>
					</ul>
					<button
						className={
							selectedOutfit.reset === 'true' ? 'resetVisible' : 'resetHidden'
						}
						onClick={() => handleReset(selectedOutfit.id)}>
						Reset
					</button>
				</div>
			</div>
			<div className='outfit-img-container'>
				<img
					src={`${process.env.PUBLIC_URL}${outfit.outfit_img}`}
					alt={`${outfit.title} outfit`}
					className='outfit-image'
				/>
			</div>

			<ItemList
				selectedOutfit={selectedOutfit}
				handleCategory={handleCategory}
				open={open}
			/>
			<ItemOptions
				selectedOutfit={selectedOutfit}
				itemCategory={itemCategory}
				visible={visible}
				handleOption={handleOption}
			/>
		</div>
	);
};

export default Outfit;
