import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    Todos: [{ id: 1, text: "Hello World" }]
}

const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers:{
        addTodo:((state, action)=>{
           const Todo = {
                id: nanoid(),
                text: action.payload
            }
            state.Todos.push(Todo)
        }),
        updateTodo:((state,action)=>{

            const {id, text} = action.payload

            const todo =  state.Todos.find((todo)=> todo.id === id)
            if(todo){
                todo.text = text
            }
        }),
        removeTodo:((state, action)=>{
            const Todos = state.Todos.filter((todo)=> todo.id !== action.payload)
            
        })
        
    }

})

export const {addTodo, updateTodo, removeTodo} = todoSlice.actions

export default todoSlice.reducer