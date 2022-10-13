console.log("TEST");

const list = document.querySelector(".list");
const listItemTemplate = document
  .querySelector("#list-item-template")
  .content.querySelector(".list-item");
const input = document.querySelector(".input");
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

const createItem = (item) => {
  const element = listItemTemplate.cloneNode(true);
  const elementName = element.querySelector(".list-item__text");

  elementName.textContent = item.text;

  console.log(elementName);

  list.prepend(element);
};

items.forEach(createItem);

const clearInput = () => {
  input.value = "";
};

const handleFormSubmit = (event) => {
  event.preventDefault();

  const newTask = input.value;

  createItem({
    text: newTask,
  });

  clearInput();
};

form.addEventListener("submit", handleFormSubmit);
