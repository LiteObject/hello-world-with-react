import { useState } from 'react';
import './App.css';

// https://reactjs.org/docs/getting-started.html
const Greeting = (props) => {
  return (
    <>
      <h1>{props.text}</h1>
      <h3>{props.language}</h3>
    </>
  )
}

function App() {

  const world = 'World!!!';
  const [showInOtherLang, setShowInOtherLang] = useState(false);

  function ShowOrHide(){
    setShowInOtherLang(current => !current);
  }

  return (

    <div className="App">
      <Greeting text={'Hello ' + world} language="English" />
      {
        showInOtherLang ?
          (<>
            <Greeting text="Hallo Welt" language="German" />
            <Greeting text="Ciao mondo" language="Italian" />
            <Greeting text="Hei maailma" language="Finnish" />
            <Greeting text="Bonjour monde" language="French" />
            <Greeting text="Selam Dünya" language="Turkish" />
            <Greeting text="Sawubona Mhlaba" language="Zulu" />
          </>) :
          (
            <>
              <hr />
            </>
          )
      }      
      <button onClick={ShowOrHide} style={{color:'red', padding: '10px'}}>
        {showInOtherLang ? 'Hide' : 'Show in' } other languages.
      </button>
    </div>
  );
}

export default App;
