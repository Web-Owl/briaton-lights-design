export default async function initSlider(cardsData) {
  const products = await cardsData;

  const dayProductsList = products.filter((item) => item.goodsOfDay === true);
  const dayProductsListEl = document.querySelector('.day-products__list');

  renderList(dayProductsListEl, dayProductsList);
  setSlider();
}

function renderList(containerEl, list = []) {
  containerEl.innerHTML = '';

  list.forEach((item) => {
    const liItem = document.createElement('li');
    liItem.classList.add('day-products__item', 'swiper-slide');

    const cardEl = document.createElement('div');
    cardEl.classList.add('product-card', 'product-card--small');

    const cardVisualEl = document.createElement('div');
    cardVisualEl.classList.add('product-card__visual');

    const cardImage = document.createElement('img');
    cardImage.classList.add('product-card__img');
    cardImage.src = item.image;
    cardImage.width = '290';
    cardImage.height = '344';
    cardImage.alt = `Изображение товара ${item.name}`;

    const cardMoreEl = document.createElement('div');
    cardMoreEl.classList.add('product-card__more');

    const cardLinkMore = document.createElement('a');
    cardLinkMore.classList.add('product-card__link', 'btn', 'btn--secondary');
    cardLinkMore.href = '#';

    const cardBtnTextMoreEl = document.createElement('span');
    cardBtnTextMoreEl.classList.add('btn__text');
    cardBtnTextMoreEl.textContent = 'Подробнее';

    const cardInfoEl = document.createElement('div');
    cardInfoEl.classList.add('product-card__info');

    const cardTitleEl = document.createElement('h2');
    cardTitleEl.classList.add('product-card__title');
    cardTitleEl.textContent = item.name;

    const cardOldPriceEl = document.createElement('div');
    cardOldPriceEl.classList.add('product-card__old');

    const cardOldPriceNumberEl = document.createElement('span');
    cardOldPriceNumberEl.classList.add('product-card__old-number');
    cardOldPriceNumberEl.textContent = item.price.old;

    const cardOldPriceAddEl = document.createElement('span');
    cardOldPriceAddEl.classList.add('product-card__old-add');
    cardOldPriceAddEl.textContent = '₽';

    cardOldPriceEl.append(cardOldPriceNumberEl, cardOldPriceAddEl);

    const cardPriceEl = document.createElement('div');
    cardPriceEl.classList.add('product-card__price');

    const cardPriceNumberEl = document.createElement('span');
    cardPriceNumberEl.classList.add('product-card__price-number');
    cardPriceNumberEl.textContent = item.price.new;

    const cardPriceAddEl = document.createElement('span');
    cardPriceAddEl.classList.add('product-card__price-add');
    cardPriceAddEl.textContent = '₽';

    cardPriceEl.append(cardPriceNumberEl, cardPriceAddEl);

    const cardTooltipEl = document.createElement('div');
    cardTooltipEl.classList.add('product-card__tooltip', 'tooltip');

    const cardTooltipBtnEl = document.createElement('button');
    cardTooltipBtnEl.classList.add('tooltip__btn');
    cardTooltipBtnEl.setAttribute('aria-label', 'Показать подсказку');
    cardTooltipBtnEl.setAttribute('type', 'button');
    cardTooltipBtnEl.innerHTML = `
      <svg class="tooltip__icon" width="5" height="10" aria-hidden="true">
        <use xlink:href="images/sprite.svg#icon-i"></use>
      </svg>
    `;

    const cardTooltipContentEl = document.createElement('div');
    cardTooltipContentEl.classList.add('tooltip__content');

    const cardTooltipTextEl = document.createElement('span');
    cardTooltipTextEl.classList.add('tooltip__text');
    cardTooltipTextEl.textContent = 'Наличие товара по городам:';

    const cardTooltipListEl = document.createElement('ul');
    cardTooltipListEl.classList.add('tooltip__list');

    const citiesArr = {
      moscow: 'Москва',
      orenbrg: 'Оренбург',
      saintPetersburg: 'Санкт-Петербург',
    };

    for (const property in citiesArr) {
      const liItem = document.createElement('li');
      liItem.classList.add('tooltip__item');

      const spanEl = document.createElement('span');
      spanEl.classList.add('tooltip__text');

      spanEl.textContent = citiesArr[property] + ':';

      const countEl = document.createElement('span');
      countEl.classList.add('tooltip__count');
      countEl.textContent = item.availability[property];

      spanEl.appendChild(countEl);
      liItem.appendChild(spanEl);

      cardTooltipListEl.appendChild(liItem);
    }

    cardTooltipContentEl.append(cardTooltipTextEl, cardTooltipListEl);

    cardTooltipEl.append(cardTooltipBtnEl, cardTooltipContentEl);

    cardLinkMore.appendChild(cardBtnTextMoreEl);
    cardMoreEl.append(cardLinkMore);
    cardVisualEl.append(cardImage, cardMoreEl);

    cardInfoEl.append(cardTitleEl, cardOldPriceEl, cardPriceEl, cardTooltipEl);

    cardEl.append(cardVisualEl, cardInfoEl);

    liItem.appendChild(cardEl);

    containerEl.appendChild(liItem);
  })
}

function setSlider() {
  return new Swiper('.day-products__slider', {
		navigation: {
			nextEl: '.day-products__navigation-btn--next',
			prevEl: '.day-products__navigation-btn--prev',
		},
		spaceBetween: 33,
		slidesPerView: 4,
	});
}
