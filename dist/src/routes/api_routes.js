import express from "express";
import users from '../assets/users/users_list.json' with { type: "json" };
import todos from '../assets/todos/todos_list.json' with { type: "json" };
const router = express.Router();
router.use(express.json());
//CRUD functions for Posts
//get all
router.get('/users', (request, response) => {
    response.json(users.users); //response to client, in json
});
//get one user
router.get('/users/:id', (request, response) => {
    const id = parseInt(request.params.id);
    response.json(users.users.find((user) => user.id === id)); //response to client, in json
});
//post a new user
router.post('/users', (request, response) => {
    let user = request.body;
    user.id = users.users.length + 1;
    if (user) {
        users.users.push(user);
        response.json(users); //201 'Created' - Indicates that the request has succeeded and a new resource has been created as a result.
    }
    else {
        response.json({ message: "user not created" });
    }
});
//update a user
router.put('/users/:id', (request, response) => {
    let user = request.body;
    let id = parseInt(request.params.id);
    if (user) {
        const userToUpdate = users.users.find((user) => user.id === id);
        if (userToUpdate) {
            userToUpdate.email = user.email;
            userToUpdate.firstName = user.firstName;
            userToUpdate.lastName = user.lastName;
            userToUpdate.password = user.password;
            userToUpdate.phone = user.phone;
            response.json(users.users); //201 'Created' - Indicates that the request has succeeded and a new resource has been created as a result.
        }
        else {
            response.json({ message: "user was not found" });
        }
    }
});
//delete a user
router.delete('/users/:id', (request, response) => {
    let user = request.body;
    let id = parseInt(request.params.id);
    if (user) {
        const userToDelete = users.users.find((user) => user.id === id);
        if (userToDelete) {
            const newList = users.users.filter((user) => user.id !== id);
            users.users = newList;
            response.json(newList); //201 'Created' - Indicates that the request has succeeded and a new resource has been created as a result.
        }
        else {
            response.json({ message: "user was not found" });
        }
    }
});
//CRUD functions for Todos
//get all todos
router.get('/todos', (request, response) => {
    response.json(todos.todos); //response to client, in json
});
//get one todo
router.get('/todos/:id', (request, response) => {
    let id = parseInt(request.params.id);
    response.json(todos.todos.find((todo) => todo.id === id)); //201 'Created' - Indicates that the request has succeeded and a new resource has been created as a result.
});
//post a new todo
router.post('/todos', (request, response) => {
    let todo = request.body;
    todo.id = todos.todos.length + 1;
    todos.todos.push(todo);
    response.json(todos.todos); //201 'Created' - Indicates that the request has succeeded and a new resource has been created as a result.
});
//edit todo
router.put('/todos/:id', (request, response) => {
    let todo = request.body;
    let id = parseInt(request.params.id);
    const todoToUpdate = todos.todos.find((todo) => todo.id === id);
    if (todoToUpdate) {
        todoToUpdate.id = id;
        todoToUpdate.todo = todo.todo;
        todoToUpdate.priority = todo.priority;
        todoToUpdate.priorityColor = todo.priorityColor;
        todoToUpdate.dueDate = todo.dueDate;
        todoToUpdate.completed = todo.completed;
        todos.todos = todos.todos.filter(() => todo.id !== id);
        todos.todos.push(todoToUpdate);
        response.json(todos.todos); //201 'Created' - Indicates that the request has succeeded and a new resource has been created as a result.
    }
    else {
        response.json({ message: " was not found" });
    }
});
//delete todo
router.delete('/todos/:id', (request, response) => {
    let user = request.body;
    let id = parseInt(request.params.id);
    if (user) {
        const userToDelete = todos.todos.find((user) => user.id === id);
        if (userToDelete) {
            const newList = todos.todos.filter((user) => user.id !== id);
            todos.todos = newList;
            response.json(newList); //201 'Created' - Indicates that the request has succeeded and a new resource has been created as a result.
        }
        else {
            response.json({ message: "user was not found" });
        }
    }
});
export default router;
