import React, { useState, useEffect } from 'react';
import Outfit from '../components/Outfit';
import LooksImages from '../components/LooksImages';
import '../css/outfits_features.css';

const Lookbook = () => {
	console.log('LookbookPage rendering');
	//01 Create default array of objects for each of the outfits useState hooks
	//02 Set the items 1-5 to default values
	const initialState = {
		item_01: '01_opt_1',
		item_02: '02_opt_1',
		item_03: '03_opt_1',
		item_04: '04_opt_1',
		item_05: '05_opt_1',
		reset: 'false',
	};

	const [outfit1, setOutfit1] = useState({
		id: '01',
		...initialState,
	});
	const [outfit2, setOutfit2] = useState({
		id: '02',
		...initialState,
	});
	const [outfit3, setOutfit3] = useState({
		id: '03',
		...initialState,
	});
	const [outfit4, setOutfit4] = useState({
		id: '04',
		...initialState,
	});

	//03 Looks images set the id for which outfit to load and populate the list component, defaults to 01
	const [outfitId, setOutfitId] = useState('01');
	const [selectedOutfit, setSelectedOutfit] = useState(outfit1);
	const [open, setOpen] = useState('false');
	const [visible, setVisible] = useState('false');
	const [itemCategory, setItemCategory] = useState('item_01');

	//04 Use Effect changes the value of the outfit array that is passed to the Outfit component whenever outfitId is changed.
	useEffect(() => {
		switch (outfitId) {
			case '01':
				setSelectedOutfit(outfit1);
				break;
			case '02':
				setSelectedOutfit(outfit2);
				break;
			case '03':
				setSelectedOutfit(outfit3);
				break;
			case '04':
				setSelectedOutfit(outfit4);
				break;

			default:
				alert("I don't know such values");
		}
	}, [outfitId, outfit1, outfit2, outfit3, outfit4]);

	//05 ItemList component: items have click handlers that populate the options tray with item options

	const handleCategory = (item) => {
		setItemCategory(item);
		setOpen('true');
		setVisible('true');
	};

	//06 Use Effect checks item in outfit updates selected state whenever an item is changed.
	//08 Item Options: Options have click handlers that send outfit id, item and option to update the outfit array.
	const handleOption = (id, cat, opt) => {
		switch (id) {
			case '01':
				setOutfit1({ ...outfit1, [cat]: opt, reset: 'true' });

				break;
			case '02':
				setOutfit2({ ...outfit2, [cat]: opt, reset: 'true' });

				break;
			case '03':
				setOutfit3({ ...outfit3, [cat]: opt, reset: 'true' });

				break;
			case '04':
				setOutfit4({ ...outfit4, [cat]: opt, reset: 'true' });

				break;

			default:
				alert("I don't know such values");
		}
	};

	const handleReset = (id) => {
		switch (id) {
			case '01':
				setOutfit1({ id: '01', ...initialState, reset: 'false' });
				break;
			case '02':
				setOutfit2({ id: '02', ...initialState, reset: 'false' });
				break;
			case '03':
				setOutfit3({ id: '03', ...initialState, reset: 'false' });
				break;
			case '04':
				setOutfit4({ id: '04', ...initialState, reset: 'false' });
				break;

			default:
				alert("I don't know such values");
		}
	};

	return (
		<>
			<div className='section-header'>
				<h2>Find Your Style</h2>
				<p class='lookbook-subhead'>
					Mix and match items to make the inspo look your own
				</p>
			</div>
			<Outfit
				selectedOutfit={selectedOutfit}
				open={open}
				visible={visible}
				handleCategory={handleCategory}
				handleOption={handleOption}
				itemCategory={itemCategory}
				handleReset={handleReset}
			/>
			<LooksImages setOutfitId={setOutfitId} />
		</>
	);
};

export default Lookbook;
