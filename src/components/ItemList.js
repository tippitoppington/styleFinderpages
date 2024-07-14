import React, { useMemo } from 'react';
import { outfits } from '../data/outfits-data';

const ItemComponent = ({ item, handleCategory, categoryName }) => (
	<div className='item'>
		<img
			src={`${process.env.PUBLIC_URL}${item.src}`}
			alt={`${item.brand} ${item.name}`}
			onClick={() => handleCategory(categoryName)}
			loading='lazy'
			decoding='async'
		/>
		<p>{item.price}</p>
	</div>
);

const ItemList = ({ selectedOutfit, handleCategory, open }) => {
	const { outfit, items } = useMemo(() => {
		const outfit = outfits.find((o) => o.id === selectedOutfit.id);
		const items = ['item_01', 'item_02', 'item_03', 'item_04', 'item_05'].map(
			(key) => outfit[key].find((o) => o.opt === selectedOutfit[key])
		);
		return { outfit, items };
	}, [selectedOutfit]);

	if (!outfit || items.some((item) => !item)) {
		return <div>Error: Outfit or items not found</div>;
	}

	return (
		<div
			className={open === 'true' ? 'item_list open' : 'item_list'}
			style={outfit.style}>
			<button className='tooltip'>
				Select an item to personalize this look.
			</button>
			<div className='tall_group'>
				<ItemComponent
					item={items[0]}
					handleCategory={handleCategory}
					categoryName='item_01'
				/>
				<ItemComponent
					item={items[1]}
					handleCategory={handleCategory}
					categoryName='item_02'
				/>
			</div>
			<div className='short_group'>
				<ItemComponent
					item={items[2]}
					handleCategory={handleCategory}
					categoryName='item_03'
				/>
				<ItemComponent
					item={items[3]}
					handleCategory={handleCategory}
					categoryName='item_04'
				/>
				<ItemComponent
					item={items[4]}
					handleCategory={handleCategory}
					categoryName='item_05'
				/>
			</div>
		</div>
	);
};

export default ItemList;
