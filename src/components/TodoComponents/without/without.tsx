
import React, { useState } from "react";
import { Todo } from "./Todo";
import { TodoForm } from "./TodoForm";

export const Without = () => {
 const [todos, setTodos] = useState<any[]>([]);
  const add = (todo: any) => {
    if (!todo.value || /^\s*$/.test(todo.value)) {
      return;
    }

    const newTodos = [todo, ...todos];

    setTodos(newTodos);
  };

  const updateTodo = (todoId: string, newValue: any) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    let TaskUpdated= [...todos].find((todo) => todo.id === todoId);
    TaskUpdated.values = newValue
    setTodos(TaskUpdated)
  };

  const removeTodo = (id: Number) => {
    const removeArr = [...todos].filter((todo) => todo.id !== id);

    setTodos(removeArr);
  };

  const completeTodo = (id: string) => {
    let updatedTodos = todos.map((todo: any) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }

      return todo;
    });

    setTodos(updatedTodos);
  };

  return (
    <div>
      <h1>broadcast props</h1>
      <TodoForm onSubmit={add} />
    {todos ?
      <Todo
        todos={todos}
        updateTodo={updateTodo}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
      />: null
    }

    </div>
  );
};
