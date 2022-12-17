GET https://api.todo-list.ru/tasks
 - получение списка всех задач
GET https://api.todo-list.ru/tasks/:id
 - получение задачи по id, вместо :id указываем id получаемой задачи
POST https://api.todo-list.ru/tasks
 - создание задачи, обязательное поле name
PATCH https://api.todo-list.ru/tasks/:id
 - изменение задачи, вместо :id указываем id изменяемой задачи
DELETE https://api.todo-list.ru/tasks/:id
 - удаление задачи, вместо :id указываем id удаляемой задачи
