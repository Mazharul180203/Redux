
import {createSlice} from "@reduxjs/toolkit";
import {counterSlice} from "../counter/counterSlice";


export const todoSlice = createSlice ({

    name:"todo",
    initialState:{
        value:[]
    },

    reducers:{
        Addtodo:(state,action)=>{
            state.value.push(action.payload)
        },
        Removetodo:(state,action)=>{
            state.value.splice(action.payload,1)
        },
        Edittodo:(state,action)=>{
            //{index:1, task:"my name is saurav"}
            state.value.splice(action.payload['index'],1,action.payload['task'])
        }
    }
})
export default todoSlice.reducer;
export const {Addtodo,Removetodo,Edittodo} = todoSlice.actions