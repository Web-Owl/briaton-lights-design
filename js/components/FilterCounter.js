export default class FilterCounter {
  BASE_URL = './data/data.json';

  constructor() {
    this.categoryConterEls = document.querySelectorAll('.catalog-form__item-col .custom-checkbox__field');

    this.renderCounts();
  }

  async renderCounts(products = null) {
    if (!products) {
      products = await this.fetchProducts();
    }

    this.categoryConterEls.forEach((input) => {
      const value = input.value;
      const counterEl = input.nextElementSibling.querySelector('.custom-checkbox__count');
      counterEl.textContent = products.filter((product) => product.type.includes(value)).length ?? 0;
    })
  }

  async fetchProducts(params = '') {
    const response = await fetch(`${this.BASE_URL}${params}`);

    return await response.json();
  }
}
