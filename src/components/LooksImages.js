import React from 'react';
import { outfits } from '../data/outfits-data';

const LooksImages = ({ setOutfitId }) => {
	return (
		<>
			<div className='grid-container'>
				{outfits.map((outfit) => (
					<button
						key={outfit.id}
						className='look-img-trigger'
						onClick={() => setOutfitId(outfit.id)}>
						<figure>
							<img
								src={`${process.env.PUBLIC_URL}${outfit.outfit_img}`}
								alt={`Outfit ${outfit.id}`}
								loading='lazy'
								decoding='async'
							/>
						</figure>
					</button>
				))}
			</div>
		</>
	);
};

export default LooksImages;
