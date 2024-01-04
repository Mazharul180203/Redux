import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../state/counter/counterSlice.js"

import todoReducer from "../state/todo/todoSlice"
export default configureStore({

    reducer:{

        todo:todoReducer
    }
})