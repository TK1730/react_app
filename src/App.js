import logo from './logo.svg';
import './App.css';

const user = {
  name: 'Hedy Lamarr',
  imageUrl: 'https//i.imgur.com/yX0vd0Ss.jpg',
  imageSize: 90,
}

function MyButton() {
  return (
    <button>I'm a button</button>
  )
}

function Profile() {
  return (
    <>
      <h1>{user.name}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={'Photo of ' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize
        }}
        />
    </>
  )
}


function App() {
  return (
    <div className="App">
      <h1>Hello world</h1>
      <MyButton />
      <Profile />
    </div>
  );
}

export default App;