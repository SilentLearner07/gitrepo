import { useState } from "react";

function App() {
  const [username, setUsername] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`This is what you typed right ${username}`);
    setUsername("");
  };

  const handleChange = (event) => {
    setUsername(event.target.value);
  };

  return (
    <>
      <h1>This is a form</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={username} onChange={handleChange}></input>
        <button>Submit</button>
      </form>
    </>
  );
}

export default App;
