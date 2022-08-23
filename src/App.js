import './App.css';

function App() {
  const name = 'World!!!';
  const show = true;

  return (
    <div className="App">
      <h1>Hello {show? name: '...'}</h1>
    </div>
  );
}

export default App;
