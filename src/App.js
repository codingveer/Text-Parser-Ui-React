import "./styles.css";
import {useState} from 'react';
import transformer from './lib/textTransformer';
import { JSONTree } from 'react-json-tree';

export default function App() {
 const [inputText, setInputText] = useState("");
 const [output, setOutput] = useState([]);


  const handleNewTodoKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      let transform = transformer(event.target.value)
      // 👇️ access input value from state
      console.log(transform);
      setOutput(transform)
      setInputText("")
    }
  }
  
  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log(e.target.value)
  }
  const theme = {
    base00: '#272822',
    base01: '#383830',
    base02: '#49483e',
    base03: '#75715e',
    base04: '#a59f85',
    alignItems:'Right',
    nestedNodeLabel: ({ style }, keyPath, nodeType, expanded) => ({
        style: {
            textTransform: expanded ? 'uppercase' : style.textTransform,
            fontSize:'18px',
            padding:'10px'
        },
      }),
    nestedKeyLabel: {
        fontSize:'18px',
    },
    value: {
        fontSize:'18px'
    }
  };
  return (
    <section className="todoapp">
      <div>
        <header className="header">
          <h1>todos</h1>
          <form onSubmit={handleSubmit}>
            <input
              className="new-todo"
              placeholder="What needs to be done?"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyDown={(e)=>handleNewTodoKeyDown(e)}
              autoFocus={true}
            />
          </form>
        </header>
        <section className="todoapp">
         <div> {output ? 
            <JSONTree 
              hideRoot={true}
              data={output}
              theme={theme} 
              getItemString={() => {}}
            />:''}
          </div>
          
        </section>
      </div>
    </section>
  );
}
