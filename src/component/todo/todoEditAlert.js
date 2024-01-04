import Swal from "sweetalert2";
import store from "../../redux/store/store";
import {Edittodo} from "../../redux/state/todo/todoSlice";

export function todoEditAlert(i,item){
    Swal.fire({
        title: "Update Task Name",
        input: "text",
        inputValue:item,
        inputValidator:(value)=>{
            if(value){
                store.dispatch(Edittodo({index:i,task:value}));

            }
        }

    })
}