import React, { useState, useEffect } from 'react';
import Outfit from '../components/Outfit';
import LooksImages from '../components/LooksImages';
import { outfits } from '../data/outfits';
const Lookbook = () => {
  const [outfitId, setOutfitId] = useState('01');

  //create useState for each of the outfits? 1, 2, 3, 4

  const [outfit, setOutfit] = useState(
    outfits.filter((o) => o.id === outfitId)
  );
  const [itemCategory, setItemCategory] = useState('item_01');
  const [open, setOpen] = useState('false');
  const [visible, setVisible] = useState('false');
  const [chosen, setChosen] = useState(0);
  // console.log(`Lookbook.js, outfit[0].style= ${outfit[0].style}`);

  //set default item state to option 1
  const [item1, setItem1] = useState(
    outfit[0].item_01.filter((it) => it.opt === '01_opt_1')
  );
  const [item2, setItem2] = useState(
    outfit[0].item_02.filter((it) => it.opt === '02_opt_1')
  );
  const [item3, setItem3] = useState(
    outfit[0].item_03.filter((it) => it.opt === '03_opt_1')
  );
  const [item4, setItem4] = useState(
    outfit[0].item_04.filter((it) => it.opt === '04_opt_1')
  );
  const [item5, setItem5] = useState(
    outfit[0].item_05.filter((it) => it.opt === '05_opt_1')
  );

  //reset outfit items to default whenever one of the main look images is clicked
  useEffect(() => {
    setItem1(outfit[0].item_01.filter((it) => it.opt === '01_opt_1'));
    setChosen(0);
    setItem2(outfit[0].item_02.filter((it) => it.opt === '02_opt_1'));
    setChosen(0);
    setItem3(outfit[0].item_03.filter((it) => it.opt === '03_opt_1'));
    setChosen(0);
    setItem4(outfit[0].item_04.filter((it) => it.opt === '04_opt_1'));
    setChosen(0);
    setItem5(outfit[0].item_05.filter((it) => it.opt === '05_opt_1'));
    setChosen(0);
  }, [outfit]); // pass `value` as a dependency

  const showOptions = (item) => {
    setItemCategory(item);
    setOpen('true');
    setVisible('true');
  };

  const handleOption = (itemCategory, itemOpt, i) => {
    switch (itemCategory) {
      case 'item_01':
        setItem1(outfit[0].item_01.filter((it) => it.opt === itemOpt));
        setChosen(i);
        break;
      case 'item_02':
        setItem2(outfit[0].item_02.filter((it) => it.opt === itemOpt));
        setChosen(i);
        break;
      case 'item_03':
        setItem3(outfit[0].item_03.filter((it) => it.opt === itemOpt));
        setChosen(i);
        break;
      case 'item_04':
        setItem4(outfit[0].item_04.filter((it) => it.opt === itemOpt));
        setChosen(i);
        break;
      case 'item_05':
        setItem5(outfit[0].item_05.filter((it) => it.opt === itemOpt));
        setChosen(i);
        break;
      default:
        alert("I don't know such values");
    }
  };

  const changeOutfit = (id) => {
    setOutfitId(id);
    setOutfit(outfits.filter((o) => o.id === id));
  };
  // console.log(`Lookbook.js, item1[0].src = ${item1[0].src}`);
  return (
    <>
      <div className='section-header'>
        <h2>Find Your Style</h2>
      </div>
      <Outfit
        outfit={outfit}
        item1={item1}
        item2={item2}
        item3={item3}
        item4={item4}
        item5={item5}
        showOptions={showOptions}
        handleOption={handleOption}
        open={open}
        visible={visible}
        itemCategory={itemCategory}
        chosen={chosen}
      />
      <LooksImages changeOutfit={changeOutfit} />
    </>
  );
};

export default Lookbook;
