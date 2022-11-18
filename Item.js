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

  constructor(data, onCopy, onClick, onEdit) {
    this.data = data;
    this.getTemplate();
    this._onCopy = onCopy;
    this._onClick = onClick;
    this._onEdit = onEdit;
  }

  copy() {
    const copy = this.element.cloneNode(true);
    this._onCopy(copy, this.element);
  }

  edit() {
    this._onEdit(this.data);
  }

  delete() {
    this.element.remove();
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

    this.elementName.textContent = this.data.text;

    this._setListeners();

    return this.element;
  }

  _setListeners() {
    this.elementName.addEventListener("click", this._onClick);
    this.removeButton.addEventListener("click", this.delete);
    this.editButton.addEventListener("click", this.edit);
    this.copyButton.addEventListener("click", this.copy);
  }
}
