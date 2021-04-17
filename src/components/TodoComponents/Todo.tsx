import React, { useState } from 'react'

import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';
import { TodoForm } from './TodoForm';

export const Todo = ({todos, completeTodo,  removeTodo, updateTodo }:any) => {
  const [edit, setEdit] = useState<{id: null | string | number, value: string, isCompleted: boolean}>({
    id: 0,
    value: '',
    isCompleted: false
})

const submitUpdate = ({id, value}: {id: string | number, value: string}) => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: '',
      isCompleted: false,
    });
  };

if (edit.id) {
    return <TodoForm task={edit} onSubmit={submitUpdate} />;
  }

return todos.map((todo: {id: string | number, value: string, isComplete: boolean}, index:number)=>(
    <div 
    className={todo.isComplete? 'todo__row complete': 'todo__row' }
    key={index}
    >
        <div key={todo.id} onClick={()=> completeTodo(todo.id)}
            className="todo__task"
        >
            {todo.value}
        </div>

        <div className="icons">
            <RiCloseCircleLine
                onClick={()=> removeTodo(todo.id)}
                className='delete-icon'
            />
            <TiEdit
             onClick={()=> setEdit({id: todo.id, value: todo.value, isCompleted: false})}
             className='edit-icon'
            />
        </div>

    </div>
))
}
