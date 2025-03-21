export default class Basket {
  _items = [];

  constructor() {
    this.headerCountEl = document.querySelector('.header__user-count');
    this.headerCountEl.textContent = this.itemCount;
    this.headerBasketEl = document.querySelector('.header__basket');
    this.basketEmptyBlock = document.querySelector('.basket__empty-block');
    this.basketLinkEl = document.querySelector('.basket__link');

    this.updateEmptyBasket();
  }

  addItem(product) {
    this._items.push(product);
    this.addCount += 1;
    this.updateUI();
  }

  removeItem(id) {
    const index = this._items.findIndex(item => item.id === id);
    if (index !== -1) {
      this._items.splice(index, 1);
    }
    this.addCount -= 1;
    this.updateUI();
  }

  updateUI() {
    const basketList = document.querySelector('.basket__list');
    basketList.innerHTML = '';

    this._items.forEach((item) => {
      const liEl = document.createElement('li');
      liEl.classList.add('basket__item');

      const imgWrapEl = document.createElement('div');
      imgWrapEl.classList.add('basket__img');

      const imgEl = document.createElement('img');
      imgEl.src = item.image;
      imgEl.alt = 'Фотография товара ' + item.name;
      imgEl.height = '60';
      imgEl.width = '60';

      imgWrapEl.appendChild(imgEl);

      const nameEl = document.createElement('span');
      nameEl.classList.add('basket__name');
      nameEl.textContent = item.name;

      const priceEl = document.createElement('span');
      priceEl.classList.add('basket__price');
      priceEl.textContent = item.price.new;

      const removeBtn = document.createElement('button');
      removeBtn.classList.add('basket__close');
      removeBtn.type = 'button';
      removeBtn.ariaLabel = 'Удалить товар из корзины';
      removeBtn.innerHTML = `
        <svg class="main-menu__icon" width="24" height="24" aria-hidden="true">
          <use xlink:href="images/sprite.svg#icon-close"></use>
        </svg>
      `;

      removeBtn.addEventListener('click', () => {
        this.removeItem(item.id);
      });

      liEl.append(imgWrapEl, nameEl, priceEl, removeBtn)

      basketList.appendChild(liEl);
    });

    this.headerCountEl.textContent = this.itemCount;

    this.updateEmptyBasket();
  }

  updateEmptyBasket() {
    if (this.itemCount > 0) {
      this.basketEmptyBlock.style.display = 'none';
      this.basketLinkEl.style.display = 'flex';
    } else {
      this.basketEmptyBlock.style.display = '';
      this.basketLinkEl.style.display = 'none';
    }
  }

  get itemCount() {
    return this._items.length;
  }
}
