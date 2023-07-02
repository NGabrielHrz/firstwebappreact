import "./App.css";
import React, { useState, useEffect, useRef } from "react";

const Form = ({ showed }) => {
  let [Title, setTitle] = useState("");
  let [Body, setBody] = useState("");

  const firstInput = useRef();

  useEffect(() => {
    if (showed) {
      // console.log(firstInput);
      firstInput.current.focus();
    }
  }, [showed]);

  const sendFrom = (ev) => {
    ev.preventDefault();
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        title: Title,
        body: Body,
        userId: 1,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        setTitle("");
        setBody("");
        console.log(json);
      });
  };

  return (
    <form onSubmit={(ev) => sendFrom(ev)}>
      <div>
        <label htmlFor="Text">Text</label>
        <input
          type="text"
          value={Title}
          id="Text"
          ref={firstInput}
          onChange={(ev) => setTitle(ev.target.value)}
        />
      </div>
      <div>
        <label htmlFor="body">Publicación</label>
        <textarea
          rows=""
          cols=""
          value={Body}
          id="body"
          onChange={(ev) => setBody(ev.target.value)}
        />
      </div>
      <input type="submit" value="Enviar" />
    </form>
  );
};

const Acordion = () => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <button onClick={() => setShow(true)}>Mostrar formulario</button>
      {show && <Form showed={show} />}
    </div>
  );
};

const App = () => {
  return (
    <div className="App">
      <Acordion />
    </div>
  );
};

export default App;
