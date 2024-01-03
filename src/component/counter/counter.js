import React, {useRef} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {decrement, increment, setCustom} from "../../redux/state/counter/counterSlice";

const Counter = () => {

    const count = useSelector((state)=>state.counter.value)
    const dispatch = useDispatch();
    const myNumber = useRef();
    return (
        <div className="card">
            <div className="card-header bg-secondary">
                <h4 className="text-white">My Counter App</h4>

            </div>
            <div className="card-body">
                <h1>{count}</h1>
                <div className="my-4">
                    <div onClick={()=>dispatch(increment())} className="btn btn-success">Increase</div>
                    <div onClick={()=>dispatch(decrement())}  className="btn mx-2 btn-danger">Decrease</div>
                </div>
                <div className="my-4">
                    <input ref={myNumber} className="form-control w-50 my-2" type="number"/>
                    <button onClick={()=>dispatch(setCustom(myNumber.current.value))} className="btn w-50 my-2 btn-success">Set Custom</button>
                </div>
            </div>
        </div>
    );
};

export default Counter;