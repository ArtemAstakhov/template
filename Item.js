export class ToDoItem {
  data;
  template;
  element;
  elementName;
  removeButton;
  editButton;
  copyButton;
  _onCopy;
  _onClick;
  _onEdit;

  constructor(data, onCopy, onClick, onEdit, onRemove) {
    this.data = data;
    this.getTemplate();
    this._onCopy = onCopy;
    this._onClick = onClick;
    this._onEdit = onEdit;
    this._onRemove = onRemove;

    console.log(this.data);

    this.edit = this.edit.bind(this);
    this.copy = this.copy.bind(this);
    this.delete = this.delete.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }

  async copy() {
    const copy = this.element.cloneNode(true);
    this._onCopy(copy, this.element);
  }

  edit() {
    this._onEdit(this.data);
  }

  delete() {
    this.element.remove();
  }

  handleRemove() {
    this._onRemove(this);
  }

  getTemplate() {
    this.template = document
      .querySelector("#list-item-template")
      .content.querySelector(".list-item");
  }

  create() {
    this.element = this.template.cloneNode(true);
    this.elementName = this.element.querySelector(".list-item__text");
    this.removeButton = this.element.querySelector(
      ".list-item__action_type_delete"
    );
    this.editButton = this.element.querySelector(
      ".list-item__action_type_edit"
    );
    this.copyButton = this.element.querySelector(
      ".list-item__action_type_copy"
    );

    this.copyButton.innerHTML = this.data.likes.length;

    if (this.data.likes.some((l) => l.userId === window.userInfo.id)) {
      this.copyButton.classList.remove("item__action_hidden");
    }

    if (this.data.creator.userId === window.userInfo.id) {
      this.removeButton.classList.remove("item__action_hidden");
    }

    this.elementName.textContent = this.data.text;

    this._setListeners();

    return this.element;
  }

  _setListeners() {
    this.elementName.addEventListener("click", this._onClick);
    this.removeButton.addEventListener("click", this.handleRemove);
    this.editButton.addEventListener("click", this.edit);
    this.copyButton.addEventListener("click", this.copy);
  }
}
