const list = document.querySelector(".list");
const listItemTemplate = document
  .querySelector("#list-item-template")
  .content.querySelector(".list-item");
const input = document.querySelector(".input");
const button = document.querySelector(".button");
const form = document.querySelector(".form");

const items = [
  {
    text: "Сделать проектную работу",
  },
  {
    text: "Полить цветы",
  },
  {
    text: "Пройти туториал по реакту",
  },
];

const EDIT_BUTTON_TEXT = "Редактировать";
const NEW_BUTTON_TEXT = "Добавить";

let activeItem;

const createItem = (item) => {
  const element = listItemTemplate.cloneNode(true);
  const elementName = element.querySelector(".list-item__text");
  const removeButton = element.querySelector(".list-item__action_type_delete");
  const editButton = element.querySelector(".list-item__action_type_edit");
  const copyButton = element.querySelector(".list-item__action_type_copy");

  elementName.textContent = item.text;

  removeButton.addEventListener("click", () => removeItem(element));
  editButton.addEventListener("click", () => editItem(element, item));
  copyButton.addEventListener("click", () => copyItem(element));

  list.prepend(element);
};

items.forEach(createItem);

const clearInput = () => {
  input.value = "";
  activeItem = null;
  button.textContent = NEW_BUTTON_TEXT;
};

const handleFormSubmit = (event) => {
  event.preventDefault();

  const newTask = input.value;

  if (button.textContent === NEW_BUTTON_TEXT) {
    createItem({
      text: newTask,
    });

    clearInput();
  }

  if (button.textContent === EDIT_BUTTON_TEXT) {
    const elementName = activeItem.querySelector(".list-item__text");

    elementName.textContent = newTask;

    clearInput();
  }
};

const removeItem = (element) => {
  element.remove();
};

const editItem = (element, item) => {
  input.value = item.text;
  button.textContent = EDIT_BUTTON_TEXT;
  activeItem = element;
};

const copyItem = (element) => {
  const copy = element.cloneNode(true);

  list.insertBefore(copy, element.nextSibling);
};

form.addEventListener("submit", handleFormSubmit);
