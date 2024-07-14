import React, { useMemo } from 'react';
import { outfits } from '../data/outfits-data';

const ItemOption = ({
	opt,
	chosen,
	handleOption,
	selectedOutfitId,
	itemCategory,
}) => (
	<div className='item-opt'>
		<img
			className={opt.opt === chosen ? 'item-opt chosen' : 'item-opt'}
			src={`${process.env.PUBLIC_URL}${opt.src}`}
			loading='lazy'
			decoding='async'
			alt={`${opt.brand} ${opt.name}`}
			onClick={() => handleOption(selectedOutfitId, itemCategory, opt.opt)}
		/>
		<div className='item-info'>
			<p>{opt.brand}</p>
			<p>{opt.name}</p>
			<p>{opt.price}</p>
			<p>View Details</p>
		</div>
	</div>
);

const ItemOptions = ({
	selectedOutfit,
	itemCategory,
	handleOption,
	visible,
}) => {
	const { outfit, itemCatOpts, chosen } = useMemo(() => {
		const outfit = outfits.find((o) => o.id === selectedOutfit.id);
		return {
			outfit,
			itemCatOpts: outfit ? outfit[itemCategory] : [],
			chosen: selectedOutfit[itemCategory],
		};
	}, [selectedOutfit, itemCategory]);

	if (!outfit) {
		return <div>Error: Outfit not found</div>;
	}

	return (
		<div
			style={{
				backgroundImage: `url(${process.env.PUBLIC_URL}/img/up-down.svg)`,
				backgroundRepeat: 'no-repeat',
				backgroundSize: '5%',
				backgroundPosition: '90% 60%',
				backgroundOffset: '20px',
			}}
			className={
				visible === 'true'
					? 'item-opts-container visible'
					: 'item-opts-container'
			}>
			<div className='panel-header sticky'>
				<h4>Change item</h4>
			</div>
			{itemCatOpts.map((opt, i) => (
				<ItemOption
					key={i}
					opt={opt}
					chosen={chosen}
					handleOption={handleOption}
					selectedOutfitId={selectedOutfit.id}
					itemCategory={itemCategory}
				/>
			))}
		</div>
	);
};

export default ItemOptions;
