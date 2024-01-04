import React from 'react';
import CreatTodo from "../component/todo/CreatTodo";
import TodoList from "../component/todo/TodoList";

const TodoPage = () => {
    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card-header">
                            <h4>My TODO App</h4>
                        </div>
                        <div className="card-body">
                            <CreatTodo/>
                            <TodoList/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TodoPage;