import React, { useState } from "react";
import { Todo } from "./Todo";
import { TodoForm } from "./TodoForm";

export const TodoList = ({name, id}:{name: string, id: any}) => {
  const [todos, setTodos] = useState<any[]>([]);

  const add = (todo: any) => {
    if (!todo.value || /^\s*$/.test(todo.value)) {
      return;
    }

    const newTodos = [todo, ...todos];

    setTodos(newTodos);
  };

  const updateTodo = (todoId: number, newValue: any) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    setTodos((prev) =>
      prev.map((item) => (item.id === todoId ? newValue : item))
    );
  };

  const removeTodo = (id: Number) => {
    const removeArr = [...todos].filter((todo) => todo.id !== id);

    setTodos(removeArr);
  };

  const completeTodo = (id: string) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }

      return todo;
    });

    setTodos(updatedTodos);
  };

  return (
    <div>
      <div className="todo__header">
        <h1>TODO of {id} </h1>
        <span>by {name}</span>
      </div>

      <TodoForm onSubmit={add} />

      <Todo
        todos={todos}
        updateTodo={updateTodo}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
      />
    </div>
  );
};
