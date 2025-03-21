export default class Accordion {
  static _activeEl = null;

  constructor(element) {
    this.element = element;
    this.btn = element.querySelector('.accordion__btn');
    this.isOpen = false;

    this.btn.addEventListener('click', () => {
      this.toggle();
    });
  }

  toggle() {
    if (this.isOpen) {
      this.close();
    } else {
      this.open();
    }
  }

  open() {
    if (Accordion._activeEl) {
      Accordion._activeEl.close();
    }

    this.btn.classList.add('accordion__btn--active');
    this.isOpen = true;
    Accordion._activeEl = this;
  }

  close() {
    this.btn.classList.remove('accordion__btn--active');
    this.isOpen = false;

    if (Accordion._activeEl === this) {
      Accordion._activeEl = null;
    }
  }
}
