import logo from './logo.svg';
import './App.css';

function MyButton() {
  return (
    <button>I'm a button</button>
  )
}

function App() {
  return (
    <div className="App">
      <h1>Hello world</h1>
      <MyButton />
    </div>
  );
}

export default App;
