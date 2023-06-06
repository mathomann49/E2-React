import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: "todos",
    initialState: [],
    reducers: {
        addTodo: (state, action) => {
            const newTodo = {
                // id: Date.now(),
                id: Math.floor(Math.random() * 100000),
                title: action.payload.title,
            };
            state.push(newTodo);
        },

        deleteTodo: (state, action) => {
            return state.filter((item) => item.id !== action.payload.id);
        },
        
    },
});

export const { addTodo, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;