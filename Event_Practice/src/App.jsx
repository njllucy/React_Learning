import { useState } from "react";
import Navbar from "./components/Navbar";

function App() {
  // States
  const [count, setCount] = useState(0);
  const [visible, setVisible] = useState(true);
  const [color, setColor] = useState("black");
  const [dark, setDark] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [data, setData] = useState(null);
  const [clicked, setClicked] = useState(false);

  // Functions
  const greet = (name) => alert(`Hello, ${name}!`);

  const handleClick = () => {
    if (Math.random() > 0.5) alert("You won!");
    else alert("Try again!");
  };

  const fetchData = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const json = await res.json();
    setData(json);
  };

  const func1 = () => console.log("First function");
  const func2 = () => console.log("Second function");

  return (


    <div
      style={{
        background: dark ? "#333" : "#fff",
        color: dark ? "#fff" : "#000",
        padding: "20px",
        minHeight: "100vh",
      }}
    >
      <Navbar />
      <h2>React onClick Examples</h2>

      {/* 1. Simple Alert */}
      <button onClick={() => alert("Button clicked!")}>Simple Alert</button> 

      {/* 2. Increment Counter */}
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase Counter</button> 

      {/* 3. Toggle Visibility */}
      {visible && <p>I am visible!</p>}
      <button onClick={() => setVisible(!visible)}>Toggle Visibility</button> 

      {/* 4. Change Text Color */}
      <p style={{ color }}>This text changes color</p>
      <button onClick={() => setColor("red")}>Red</button>
      <button onClick={() => setColor("blue")}>Blue</button>

      {/* 5. Pass Arguments */}
      <button onClick={() => greet("Nadia")}>Greet Me</button> 

      {/* 6. Prevent Default */}
      <a
        href="https://google.com"
        onClick={(e) => {
          e.preventDefault();
          alert("Link clicked without redirect");
        }}
      >
        Click Link
      </a>

      {/* 7. Multiple Functions */}
      <button
        onClick={() => {
          func1();
          func2();
        }}
      >
        Call Multiple Functions
      </button>

      {/* 8. Toggle Dark/Light Mode */}
      <button onClick={() => setDark(!dark)}>Toggle Dark/Light Mode</button> 

      {/* 9. Open Modal */}
      <button onClick={() => setModalOpen(true)}>Open Modal</button>
      {modalOpen && (
        <div
          style={{
            border: "1px solid #000",
            padding: "20px",
            marginTop: "10px",
          }}
        >
          <p>This is a modal!</p>
          <button onClick={() => setModalOpen(false)}>Close Modal</button>
        </div>
      )}
      {/* 10. API Call */}
      <button onClick={fetchData}>Fetch Data</button>
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>} 

      {/* 11. Conditional Action */}
      <button onClick={handleClick}>Try Your Luck</button> 

      {/* 12. Disable Button After Click */}
      <button onClick={() => setClicked(true)} disabled={clicked}>
        {clicked ? "Clicked" : "Click Me"}
      </button>
    </div>
  );
}

export default App;



