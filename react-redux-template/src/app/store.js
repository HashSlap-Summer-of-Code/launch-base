import { configureStore } from '@reduxjs/toolkit'
import todoReducer from '../features//todos/todoSlice';

export const store = configureStore({
    reducer: {
        todo: todoReducer
    }
})

// Redux state tree looks like this:
// {
//   todo: {
//     Todos: [ { id: 1, text: "Hello World" } ]
//   }
// }
