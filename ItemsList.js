export class ItemsList {
  list;

  constructor(listClassName) {
    this.list = document.querySelector(listClassName);
  }

  insertBefore() {}

  render(element) {
    this.list.prepend(element);
  }
}
