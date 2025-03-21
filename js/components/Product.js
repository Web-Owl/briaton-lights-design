import Basket from './Basket.js';

const basket = new Basket();

export default class Product {
  constructor(data) {
    this.id = data.id;
    this.name = data.name;
    this.price = data.price;
    this.image = data.image;
    this.availability = data.availability;
    this.type = data.type;
    this.rating = data.rating;
    this.goodsOfDay = data.goodsOfDay;
  }

  getElement() {
    const liItem = document.createElement('li');
    liItem.classList.add('catalog__item');

    this.cardEl = document.createElement('div');
    this.cardEl.classList.add('product-card');

    this.cardVisualEl = document.createElement('div');
    this.cardVisualEl.classList.add('product-card__visual');

    this.cardImage = document.createElement('img');
    this.cardImage.classList.add('product-card__img');
    this.cardImage.src = this.image;
    this.cardImage.width = '290';
    this.cardImage.height = '436';
    this.cardImage.alt = `Изображение товара ${this.name}`;

    this.cardMoreEl = document.createElement('div');
    this.cardMoreEl.classList.add('product-card__more');

    this.cardLinkBucket = document.createElement('a');
    this.cardLinkBucket.classList.add('product-card__link', 'btn', 'btn--icon');
    this.cardLinkBucket.setAttribute('data-id', this.id);
    this.cardLinkBucket.href = '#';
    this.cardLinkBucket.innerHTML = `
      <span class="btn__text">В корзину</span>
      <svg width="24" height="24" aria-hidden="true">
        <use xlink:href="images/sprite.svg#icon-basket"></use>
      </svg>
    `;

    this.cardLinkBucket.addEventListener('click', (e) => {
      e.preventDefault();

      basket.addItem(this);
    })

    this.cardLinkMore = document.createElement('a');
    this.cardLinkMore.classList.add('product-card__link', 'btn', 'btn--secondary');
    this.cardLinkMore.href = '#';

    this.cardBtnTextMoreEl = document.createElement('span');
    this.cardBtnTextMoreEl.classList.add('btn__text');
    this.cardBtnTextMoreEl.textContent = 'Подробнее';

    this.cardInfoEl = document.createElement('div');
    this.cardInfoEl.classList.add('product-card__info');

    this.cardTitleEl = document.createElement('h2');
    this.cardTitleEl.classList.add('product-card__title');
    this.cardTitleEl.textContent = this.name;

    this.cardOldPriceEl = document.createElement('div');
    this.cardOldPriceEl.classList.add('product-card__old');

    this.cardOldPriceNumberEl = document.createElement('span');
    this.cardOldPriceNumberEl.classList.add('product-card__old-number');
    this.cardOldPriceNumberEl.textContent = this.price.old;

    this.cardOldPriceAddEl = document.createElement('span');
    this.cardOldPriceAddEl.classList.add('product-card__old-add');
    this.cardOldPriceAddEl.textContent = '₽';

    this.cardOldPriceEl.append(this.cardOldPriceNumberEl, this.cardOldPriceAddEl);

    this.cardPriceEl = document.createElement('div');
    this.cardPriceEl.classList.add('product-card__price');

    this.cardPriceNumberEl = document.createElement('span');
    this.cardPriceNumberEl.classList.add('product-card__price-number');
    this.cardPriceNumberEl.textContent = this.price.new;

    this.cardPriceAddEl = document.createElement('span');
    this.cardPriceAddEl.classList.add('product-card__price-add');
    this.cardPriceAddEl.textContent = '₽';

    this.cardPriceEl.append(this.cardPriceNumberEl, this.cardPriceAddEl);

    this.cardTooltipEl = document.createElement('div');
    this.cardTooltipEl.classList.add('product-card__tooltip', 'tooltip');

    this.cardTooltipBtnEl = document.createElement('button');
    this.cardTooltipBtnEl.classList.add('tooltip__btn');
    this.cardTooltipBtnEl.setAttribute('aria-label', 'Показать подсказку');
    this.cardTooltipBtnEl.setAttribute('type', 'button');
    this.cardTooltipBtnEl.innerHTML = `
      <svg class="tooltip__icon" width="5" height="10" aria-hidden="true">
        <use xlink:href="images/sprite.svg#icon-i"></use>
      </svg>
    `;

    this.cardTooltipContentEl = document.createElement('div');
    this.cardTooltipContentEl.classList.add('tooltip__content');

    this.cardTooltipTextEl = document.createElement('span');
    this.cardTooltipTextEl.classList.add('tooltip__text');
    this.cardTooltipTextEl.textContent = 'Наличие товара по городам:';

    this.cardTooltipListEl = document.createElement('ul');
    this.cardTooltipListEl.classList.add('tooltip__list');

    this.citiesArr = {
      moscow: 'Москва',
      orenburg: 'Оренбург',
      saintPetersburg: 'Санкт-Петербург',
    };

    for (const property in this.citiesArr) {
      const liItem = document.createElement('li');
      liItem.classList.add('tooltip__item');

      const spanEl = document.createElement('span');
      spanEl.classList.add('tooltip__text');

      spanEl.textContent = this.citiesArr[property] + ': ';

      const countEl = document.createElement('span');
      countEl.classList.add('tooltip__count');
      countEl.textContent = this.availability[property];

      spanEl.appendChild(countEl);
      liItem.appendChild(spanEl);
      this.cardTooltipListEl.appendChild(liItem);
    }

    this.cardTooltipContentEl.append(this.cardTooltipTextEl, this.cardTooltipListEl);

    this.cardTooltipEl.append(this.cardTooltipBtnEl, this.cardTooltipContentEl);

    this.cardLinkMore.appendChild(this.cardBtnTextMoreEl);
    this.cardMoreEl.append(this.cardLinkBucket, this.cardLinkMore);
    this.cardVisualEl.append(this.cardImage, this.cardMoreEl);

    this.cardInfoEl.append(this.cardTitleEl, this.cardOldPriceEl, this.cardPriceEl, this.cardTooltipEl);

    this.cardEl.append(this.cardVisualEl, this.cardInfoEl);

    liItem.appendChild(this.cardEl);

    tippy(this.cardTooltipBtnEl, {
      theme: 'lightwhite',
      content(reference) {
        return reference.nextElementSibling.innerHTML;
      },
      allowHTML: true,
    });

    return liItem;
  }
}
