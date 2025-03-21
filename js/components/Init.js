import Product from './Product.js';
import ProductList from './ProductList.js';
import Accordion from './Accordion.js';

import getProducts from '../api.js';
import toggleMenu from './BurgerMenu.js';
import { toggleLocationCity, updateCityName } from './LocationCity.js';
import initSlider from './Slider.js';
import initValidate from './Validate.js';

const productList = new ProductList();

export default async function init() {
  const cardsData = await getProducts();

  const mainMenuEl = document.querySelector('.main-menu');
  const headerCatalogBtn = document.querySelector('.header__catalog-btn');
  const mainMenuCloseBtn = document.querySelector('.main-menu__close');

  const locationCityBtn = document.querySelector('.location__city');
  const locationsList = document.querySelectorAll('.location__sublink');
  const locationCityNameEl = document.querySelector('.location__city-name');

  const catalogListEl = document.querySelector('.catalog__list');

  const catalogCheckboxes = document.querySelectorAll('.catalog-form__item-col .custom-checkbox__field');
  const catalogSelect = document.querySelector('.catalog__sort-select');
  const catalogRadioButtons = document.querySelectorAll('.catalog-form__item-row .custom-radio__field');

  const headerUserBtn = document.querySelector('.header__user-btn');
  const basketEl = document.querySelector('.basket');

  const accordionItems = document.querySelectorAll('.accordion__element');

  mainMenuEl.addEventListener('click', function(e) {
    const target = e.target;
    if (target === mainMenuEl) {
      toggleMenu(mainMenuEl);
    }
  });

  headerCatalogBtn.addEventListener('click', function () {
    toggleMenu(mainMenuEl);
  });

  mainMenuCloseBtn.addEventListener('click', function () {
    toggleMenu(mainMenuEl);
  });

  locationCityBtn.addEventListener('click', function() {
    toggleLocationCity(locationCityBtn);
  });

  locationsList.forEach((link) => {
    link.addEventListener('click', function() {
      updateCityName(locationCityNameEl, link.textContent);
      toggleLocationCity(locationCityBtn);
    })
  })

  renderList(catalogListEl, cardsData);
  getProductsCount(catalogCheckboxes, cardsData);

  catalogCheckboxes.forEach((input) =>
    input.addEventListener('change', function() {
      filterProducts(catalogCheckboxes, catalogSelect, catalogRadioButtons, catalogListEl);
      productList.currentPage = 1;
    })
  );

  catalogSelect.addEventListener('change', function() {
    filterProducts(catalogCheckboxes, catalogSelect, catalogRadioButtons, catalogListEl);
  });

  catalogRadioButtons.forEach((radio) => {
    radio.addEventListener('change', function() {
      filterProducts(catalogCheckboxes, catalogSelect, catalogRadioButtons, catalogListEl);
      productList.currentPage = 1;
    });
  });

  headerUserBtn.addEventListener('click', function() {
    basketEl.classList.toggle('basket--active');
  });

  accordionItems.forEach((accordion) => {
    new Accordion(accordion);
  })

  initSlider(cardsData);
  initValidate();
}

async function renderList(containerEl, products = null) {
  containerEl.innerHTML = '';

  products = products.map((product) => new Product(product));

  products.forEach((product) => {
    containerEl.appendChild(product.getElement());
  })

  productList._products = [];

  products.forEach((productData) => {
    const product = new Product(productData);
    productList.addProduct(product);
  });
}

async function getProductsCount(inputsList, products) {
  let count = 0;

  inputsList.forEach((input) => {
    count = products.filter((product) => product.type.includes(input.value)).length;
    const countSpanEl = input.nextElementSibling.querySelector('.custom-checkbox__count');
    countSpanEl.textContent = count;
  })
}

async function filterProducts(catalogCheckboxes, catalogSelect, catalogRadioButtons, catalogListEl) {
  const selectedCategories = [];
  const sortBy = catalogSelect.value;
  let availability = null;

  catalogCheckboxes.forEach((checkbox) => {
    if (checkbox.checked) {
      selectedCategories.push(checkbox.value);
    }
  });

  catalogRadioButtons.forEach((radio) => {
    if (radio.checked) {
      availability = radio.value;
    }
  })

  let products = await getProducts();

  if (selectedCategories.length > 0) {
    products = products.filter((product) => selectedCategories.some((category) => product.type.includes(category)));
  }

  if (availability === 'instock') {
    products = products.filter(product => Object.values(product.availability).some(count => count > 0));
  }

  switch (sortBy) {
    case 'price-min':
      products.sort((a, b) => a.price.new - b.price.new);
      break;
    case 'price-max':
      products.sort((a, b) => b.price.new - a.price.new);
      break;
    case 'rating-max':
      products.sort((a, b) => b.rating - a.rating);
      break;
    default:
      break;
  }

  renderList(catalogListEl, products);
}
