import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

import "./App.css";

function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(()=>{
    axios.get('/api/jokes')
    .then((response)=>{
      setJokes(response.data)
    })
    .catch((error)=>{
      console.log(error);
    })

  }, [])

  return (
    <>
      <h1>FullStack app</h1>
      <p>JOKES:{jokes.length}</p>
      {jokes.map((joke) => (
        <div key={joke.id}>
          <h3>{joke.title}</h3>
          <p>{joke.content}</p>
        </div>
      ))}
    </>
  );
}

export default App;
