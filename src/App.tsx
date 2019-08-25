import React, { useState, FormEvent } from 'react';
// import shortid from 'shortid';
import './App.css';

interface TodosProps {
   value: string[]
}

interface AddTodoProps {
  addTodo: (todo: string) => void
}

const Todos : React.FC<TodosProps>= ({ value }) => {
  const todos = value.map(todo => <li key={todo}>{todo}</li>)
  return (
    <ul>
      {todos}
    </ul>
  );
};

const AddTodo : React.FC<AddTodoProps> = ({ addTodo }) => {
  const [value, setValue] = useState('');
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addTodo(e.target.todo.value);
    setValue('');
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        value={value}
        name="todo"
        onChange={({ target: { value } }) => setValue(value)}
      />
      <input type="submit" />
    </form>
  );
};

const App : React.FC = () => {
  const [todos, setTodos] = useState<string[]>([]);
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
