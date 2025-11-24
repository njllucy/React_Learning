import { useState } from "react";
import "./App.css";

function App() {
  const [form, setform] = useState({ name: "", phone: "" });

  const handleClick = () => {
    alert("Hey");
  };
  const handleCng = (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div>
        <button className="mb-5" onClick={handleClick}>
          Click me
        </button>
      </div>

      <input
        onChange={handleCng}
        type="text"
        className="text-white w-50 h-10 border-2 p-2 font-semibold"
        value={form.name?form.name:""}
        name="name"
      />

      <input
        onChange={handleCng}
        type="phone"
        className="text-white w-50 h-10 border-2 p-2 font-semibold"
        value={form.phone?form.phone:""}
        name="phone"
      />

    </>
  );
}

export default App;
