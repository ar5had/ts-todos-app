import React, { useState, FormEvent, ChangeEvent } from 'react';
// import shortid from 'shortid';
import './App.css';

type TodoItem = string;

interface TodosProps {
  value: TodoItem[]
}

interface AddTodoProps {
  addTodo: (todo: TodoItem) => void
}

const Todos: React.FC<TodosProps> = ({ value }) => {
  const todos = value.map(todo => <li key={todo}>{todo}</li>)
  return (
    <ul>
      {todos}
    </ul>
  );
};

const AddTodo: React.FC<AddTodoProps> = ({ addTodo }) => {
  const [value, setValue] = useState('');

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addTodo(e.currentTarget.todo.value);
    setValue('');
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => setValue(e.currentTarget.value);

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        value={value}
        name="todo"
        onChange={onChange}
      />
      <input type="submit" />
    </form>
  );
};

const App: React.FC = () => {
  const [todos, setTodos] = useState<TodoItem[]>([]);
  const addTodo = (todo: string) => setTodos([todo, ...todos]);

  return (
    <div className="wrapper">
      <h4>Todos</h4>
      <AddTodo addTodo={addTodo} />
      <Todos value={todos} />
    </div>
  );
};

export default App;
