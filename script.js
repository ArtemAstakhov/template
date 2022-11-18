import { ToDoItem } from "./Item.js";
import { ItemsList } from "./ItemsList.js";

const list = new ItemsList(".list");
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
  const toDoItem = new ToDoItem(
    item,
    (copy, element) => {
      list.insertBefore(copy, element.nextSibling);
    },
    () => {
      console.log("click");
    },
    (data) => {
      input.value = data.text;
      button.textContent = EDIT_BUTTON_TEXT;
      activeItem = element;
    }
  );

  const element = toDoItem.create();

  list.render(element);
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

form.addEventListener("submit", handleFormSubmit);
