import React, { useEffect, useRef, useState } from 'react'
import { Button, Form } from 'react-bootstrap';
import { v4 as uuidV4 } from 'uuid'

export interface TodoFormProps {
  task?: task,
  onSubmit: ({id, value}: {id: string | number, value: string}) => void;
}

export interface task {
  value: string
  isCompleted: boolean
}


export const TodoForm = (todo: TodoFormProps) => {

  const [input, setInput] = useState(todo.task ? todo.task.value : '');

  const inputRef = useRef<any>(null);

  useEffect(() => {
      inputRef.current?.focus();
  });

  const handleChange = (e: any )=>{
      setInput(e.target.value)
  }
  const heandleSubmit = (e: any) => {
      e.preventDefault();

      todo.onSubmit({
          id: uuidV4(),
          value: input
      })

      setInput('')
  }


  return (
      <div>
          <Form className='todo__form' onSubmit={heandleSubmit}>
              {todo.task ? (
                  <>
                  <Form.Control
                      type='text' 
                      value={input}
                      placeholder="update"
                      name="text"
                      className='todo__input edit'
                      onChange={handleChange}
                      ref={inputRef}
                  />

                  <Button onClick={heandleSubmit} className='todo__button edit'>Add todo</Button>
              </>

              ) :  (
                  <>
                  <Form.Control
                      type='text' 
                      value={input}
                      placeholder="add a todo"
                      name="text"
                      className='todo__input'
                      onChange={handleChange}
                      ref={inputRef}
                  />

                  <Button onClick={heandleSubmit} className='todo__button'>Add todo</Button>
                  </>
             )
              }

          </Form>
      </div>
  )
}
