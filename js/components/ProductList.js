export default class ProductList {
  _currentPage = 1;

  constructor() {
    this._products = [];
    this._itemsPerPage = 6;
    this._paginationContainer = document.querySelector('.catalog__pagination');
    this._productsContainer = document.querySelector('.catalog__list');
  }

  addProduct(product) {
    this._products.push(product);
    this.renderProducts();
  }

  renderProducts() {
    const start = (this._currentPage - 1) * this._itemsPerPage;
    const end = start + this._itemsPerPage;
    const productsToRender = this._products.slice(start, end);

    this._productsContainer.innerHTML = '';

    productsToRender.forEach((product) => {
      const productHTML = product.getElement();
      this._productsContainer.appendChild(productHTML);
    });

    this.renderPagination();
  }

  renderPagination() {
    const totalPages = Math.ceil(this._products.length / this._itemsPerPage);
    this._paginationContainer.innerHTML = '';

    for (let i = 1; i <= totalPages; i++) {
      const liEl = document.createElement('li');
      liEl.classList.add('catalog__pagination-item');

      const pageButton = document.createElement('button');
      pageButton.classList.add('catalog__pagination-link');
      pageButton.textContent = i;
      pageButton.addEventListener('click', () => {
        this._currentPage = i;
        this.renderProducts();
      });

      if (i === this._currentPage) {
        pageButton.classList.add('active');
      }
      liEl.appendChild(pageButton);
      this._paginationContainer.appendChild(liEl);
    }

    if (this._products.length <= this._itemsPerPage) {
      this._paginationContainer.style.display = 'none';
    } else {
      this._paginationContainer.style.display = 'flex';
    }
  }

  set currentPage(value) {
    this._currentPage = value;
  }

  get currentPage() {
    return this._currentPage;
  }
}
