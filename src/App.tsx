import React, { useState } from 'react';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import Todo from './todo.model';

const App: React.FC = () => {

  const [todos, setTodos] = useState<Todo[]>([{
    id: 't1',
    text: "text1"
  },
  {
    id: 't2',
    text: "text2"
  },
  {
    id: 't3',
    text: "text3"
  }]);

  const handleAddTodo = (text: string) => {
    setTodos(prevTodos => [
      ...prevTodos,
      {
        id: `t${Math.random().toString()}`,
        text: text
      }
    ]);
  };

  const handleDeleteTodo = (todoId: string) => {
    setTodos(prevTodos => {
      return prevTodos.filter(todo => todo.id !== todoId)
    });
  }

  return (
    <div className="App">
      <AddTodo onAddTodo={handleAddTodo} />
      <TodoList items={todos} onDelete={handleDeleteTodo} />
    </div>
  );
};

export default App;
