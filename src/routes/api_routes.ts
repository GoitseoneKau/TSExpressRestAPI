import { User } from '../assets/types/user.js'
import express from "express";
import users from '../assets/users/users_list.json' with { type: "json" };
import todos from '../assets/todos/todos_list.json' with { type: "json" };
import { Todo } from '../assets/types/todo.js';


const router = express.Router();
router.use(express.json())



//CRUD functions for Posts

//get all
router.get('/users', (request,response)=>{//get is a request fuction from client
    response.json(users.users)//response to client, in json
})


//get one user
router.get('/users/:id',(request,response)=>{//get is a request fuction from client
    const id = parseInt(request.params.id)
    response.json(users.users.find((user)=>user.id===id))//response to client, in json
})


//post a new user
router.post('/users',(request,response)=>{//get is a request fuction from client
    let user = request.body as User
    user.id = users.users!.length+1

    if(user){
        users.users.push(user)
        response.json(users)//201 'Created' - Indicates that the request has succeeded and a new resource has been created as a result.
    }else{
        response.json({message:"user not created"})
    }
})

//update a user
router.put('/users/:id',(request,response)=>{//get is a request fuction from client
    let user = request.body as User
    let id = parseInt(request.params.id)
    if(user){
        const userToUpdate = users.users.find((user)=>user.id===id)
        if(userToUpdate){
           
            userToUpdate.email = user.email
            userToUpdate.firstName = user.firstName
            userToUpdate.lastName = user.lastName
            userToUpdate.password = user.password
            userToUpdate.phone = user.phone
           
            users.users.map(
                (user)=>user.id===id?({...user,userToUpdate}):(user)
            )
            response.json(users.users)//201 'Created' - Indicates that the request has succeeded and a new resource has been created as a result.

        }else{
            response.json({message:"user was not found"})
        }
    
    }
})


//delete a user
router.delete('/users/:id',(request,response)=>{//get is a request fuction from client
    let user = request.body as User
    let id = parseInt(request.params.id)
    if(user){
        const userToDelete = users.users.find((user)=>user.id === id)
        if(userToDelete){
            const newList =users.users.filter((user)=>user.id !== id)

            users.users = newList

            response.json(users.users)//201 'Created' - Indicates that the request has succeeded and a new resource has been created as a result.

        }else{
            response.json({message:"user was not found"})
        }
    
    }
})




//CRUD functions for Todos

//get all todos
router.get('/todos',(request,response)=>{//get is a request fuction from client
    response.json(todos.todos)//response to client, in json
})

//get one todo
router.get('/todos/:id',(request,response)=>{//get is a request fuction from client
    let id = parseInt(request.params.id)
    response.json(todos.todos.find((todo)=>todo.id===id))//201 'Created' - Indicates that the request has succeeded and a new resource has been created as a result.
})

//post a new todo
router.post('/todos',(request,response)=>{//get is a request fuction from client
    let todo = request.body as Todo
    if(todo){
        todo.id = todos.todos.length+1
        todos.todos.push(todo)
        response.json(todos.todos)//201 'Created' - Indicates that the request has succeeded and a new resource has been created as a result.
    }else{
        response.json({message:"todo was not created"})
    }
})


//edit todo
router.put('/todos/:id',(request,response)=>{//get is a request fuction from client
    let todo = request.body as Todo
    let id = parseInt(request.params.id)
    
        const todoToUpdate = todos.todos.find((todo)=>todo.id===id)
        if(todoToUpdate){
            todoToUpdate.id = id
            todoToUpdate.todo =todo.todo
            todoToUpdate.priority =todo.priority
            todoToUpdate.priorityColor =todo.priorityColor
            todoToUpdate.dueDate =todo.dueDate
            todoToUpdate.completed =todo.completed
      
            todos.todos.map((todo)=>todo.id===id?({...todo,todoToUpdate}):todo)
            response.json(todos.todos)//201 'Created' - Indicates that the request has succeeded and a new resource has been created as a result.

        }else{
            response.json({message:"todo was not found"})
        }
    
    
})


//delete todo
router.delete('/todos/:id',(request,response)=>{//get is a request fuction from client
    let user = request.body as Todo
    let id = parseInt(request.params.id)


    if(user){
        const userToDelete = todos.todos.find((user)=>user.id === id)
        if(userToDelete){
            const newList =todos.todos.filter((user)=>user.id !== id)

            todos.todos = newList
       
            response.json(todos.todos)//201 'Created' - Indicates that the request has succeeded and a new resource has been created as a result.

        }else{
            response.json({message:"todo was not deleted"})
        }
    
    }
})




export default router;