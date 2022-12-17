import { ToDoItem } from "./Item.js";
import { ItemsList } from "./ItemsList.js";
import { API } from "./API.js";

const list = new ItemsList(".list");
const input = document.querySelector(".input");
const button = document.querySelector(".button");
const form = document.querySelector(".form");

const apiConfig = {
  baseUrl: "https://api.todo-list.ru",
  headers: {
    // 'Authorization': '...'
    "Content-Type": "application/json",
  },
};

const api = new API(apiConfig);

const EDIT_BUTTON_TEXT = "Редактировать";
const NEW_BUTTON_TEXT = "Добавить";

let activeItem;

// const confirmationPopup = new ConfirmationPopup();

const createItem = (item) => {
  const toDoItem = new ToDoItem(
    {
      text: item.name,
      id: item._id,
      likes:
        item._id === 436 ? [{ userId: 3 }, { userId: 10 }, { userId: 30 }] : [],
      creator: item._id === 434 ? { userId: 10 } : { userId: 3 },
    },
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
    },
    async (card) => {
      // confirmationPopup.open({
      //   onConfirm: () => {
      //     api.deleteTask(card.data.id).then(() => {
      //       card.delete();
      //     });
      //     confirmationPopup.close();
      //   },
      // });

      // api.deleteTask(card.data.id).then(() => {
      //   card.delete();
      // });
      await api.deleteTask(card.data.id);
      card.delete();
    }
  );

  const element = toDoItem.create();
  list.render(element);
};

api.getUserInfo().then((user) => {
  window.userInfo = user;

  api.getTaskList().then((tasks) => {
    tasks.forEach(createItem);
  });
});

const clearInput = () => {
  input.value = "";
  activeItem = null;
  button.textContent = NEW_BUTTON_TEXT;
};

const handleFormSubmit = (event) => {
  event.preventDefault();

  const newTask = input.value;

  if (button.textContent === NEW_BUTTON_TEXT) {
    api.createTask({ name: newTask }).then(createItem);

    clearInput();
  }

  if (button.textContent === EDIT_BUTTON_TEXT) {
    const elementName = activeItem.querySelector(".list-item__text");

    elementName.textContent = newTask;

    clearInput();
  }
};

form.addEventListener("submit", handleFormSubmit);
