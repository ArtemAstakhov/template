console.log("TEST");

const list = document.querySelector(".list");
const listItemTemplate = document
  .querySelector("#list-item-template")
  .content.querySelector(".list-item");

console.log(listItemTemplate);

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

  list.append(element);
};

items.forEach(createItem);
