const trendList = Array.from(JSON.parse(JSON.stringify(data)));

function addLoadEvent(func) {
  var oldonload = window.onload;
  if (typeof window.onload != 'function') {
    window.onload = func;
  } else {
    window.onload = function () {
      if (oldonload) {
        oldonload();
      }
      func();
    };
  }
}

window.onload = function () {
  setTimeout(function () {
    scrollTo(0, 0);
  }, 10); //100ms for example

  //POPULATE PRODUCT GRID
  const grid = document.querySelector('.grid');

  let trendBlock = [];

  function setBlocks() {
    grid.innerHTML = trendList
      .map(
        (item) =>
          `<div class="trend-block" data-trendid="${item.trendId}"></div>`
      )
      .join('');
  }

  function setBlockItems() {
    trendBlock = Array.from(document.querySelectorAll('.trend-block'));
    trendBlock.forEach((block) => {
      //each trend block has has a trendid,
      let currentTrendId = block.dataset.trendid; //t1 etc
      let currentProds = [];
      trendList.filter((trend) => {
        if (trend.trendId == currentTrendId) {
          currentProds = trend.products
            .map(
              (product) =>
                `<div class= "item-container ${product.orientation} ${product.visibleOn}"data-oftrend=${product.ofTrend}>
                  <img src="img/${product.orientation}/${product.ofTrend}/${product.image[0]}" alt="${product.productName}" />
                  <p>${product.brand}<br />${product.productName}</p>
                  <p class="sale-price"><span class="price">${product.price}  </span>${product.saleprice}</p>
                  </div>
                  `
            )
            .join('');
        }
      });

      block.innerHTML += currentProds;
    });
  }

  setBlocks();
  setBlockItems();
};

addLoadEvent(function () {
  setTimeout(function () {
    scrollTo(0, 114);
  }, 1200); //100ms for example
  const cta = document.querySelector('.cta-container');
  const gridItems = Array.from(document.querySelectorAll('.item-container'));
  const blocks = Array.from(document.querySelectorAll('.trend-blocks'));
  const top = document.querySelector('#top');

  //ANIMATE ON SCROLL
  //Randomize the timing that images fade in
  gridItems.forEach(
    (item) => (item.style.animationDelay = `${Math.random() * 0.8 + 0.2}s`)
  );

  function inViewPort(el) {
    let rect = el.getBoundingClientRect();
    return (
      (rect.top <= 0 && rect.bottom >= 0) ||
      (rect.bottom >= window.innerHeight && rect.top <= window.innerHeight) ||
      (rect.top >= 0 && rect.bottom <= window.innerHeight)
    );
  }

  //UPDATE CTA
  function updateCTA(tID, gridItem) {
    let currentBlock = gridItem.parentElement;
    // console.log(currentBlock, gridItem);
    //find the color value associated with the currentBlock
    trendList.filter((item) => {
      cta.classList.remove(item.color);
      if (item.trendId == tID) {
        cta.innerHTML = `<h1 class="trend-cta"><a href="#">Shop ${item.trendName}</a></h1>`;
        cta.classList.add(item.color);
      }
    });
  }
  //FADE IN PRODUCTS WHEN IN VIEW

  function showProducts() {
    gridItems.forEach((item) => {
      if (inViewPort(item)) {
        let tID = item.dataset.oftrend;
        updateCTA(tID, item);

        item.classList.add('appear');
      } else {
        item.classList.remove('appear');
      }
    });

    window.requestAnimationFrame(showProducts);
  }
  window.requestAnimationFrame(showProducts);
}); //when page loads
