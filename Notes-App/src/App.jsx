import React, { useState } from "react";
import { X } from 'lucide-react';
const App = () => {
  const submitHandler = (e) => {
    e.preventDefault();
    // console.log("form submitted");
     if (title.trim() === "" || details.trim() === "") {
    alert("Please enter both title and details!");
    return;
  }
    const copyTask = [...task];
    copyTask.push({
      title,details
    })
    setTask(copyTask);
    setTitle("");
    setDetails("");

  };

  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("")
  const [task, setTask] = useState([])


  const deleteNote = (idx) =>{
    // console.log("deleted note")
    const copyTask =[...task];
    copyTask.splice(idx,1);
    setTask(copyTask);
  }

  return (
    <div className="flex flex-col justify-center py-5 bg-black items-center">
      <h1 className="font-bold text-3xl text-pink-300 mt-10">Notes App</h1>
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="flex gap-20 items-start p-10 text-white text-center"
      >
        <div className="border-2 rounded outline-none  border-none px-10 py-5 flex flex-col items-center shadow-[-4px_8px_30px_rgba(0,0,0,0.4)] shadow-pink-400 ">

          {/* first input for heading */}
          <input
            className="w-full px-5 py-2 border-1 rounded focus:border-pink-200 outline-none"
            type="text"
            placeholder="Enter Task Heading"
            value={title}
            onChange={(e)=>{
              setTitle(e.target.value)
            }}
          />{" "}
          <br />

          {/* detailed input  */}
          <textarea
            className="h-30 px-5 py-2 border-1 focus:border-pink-200 rounded outline-none"
            type="text"
            placeholder="Write Details"
            value={details}
            onChange={(e)=>{
              setDetails(e.target.value)
            }}
          />

          {/* to add notes  */}
          <button className="border-1  px-5 py-2 mt-10 border-green-200 rounded outline-none font-medium active:bg-green-500">
            Add Note
          </button>

        </div>

       <div className="flex justify-center">
         <img
          className="h-60 object-cover"
          src="https://static.vecteezy.com/system/resources/previews/011/287/464/original/note-paper-design-png.png"
          alt=""
        />
       </div>
      </form>

      <h1 className="font-bold text-pink-400 text-2xl mb-5">Your Notes</h1>

      <div className="items-center text-center">

        <div className="flex flex-wrap items-start gap-5">
           {task.map(function(elem,idx){
              return <div key={idx} className="relative rounded bg-cover bg-[url('https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png')] h-50 w-50 rounded-2x text-white p-5">

                <button 
                onClick={()=>{
                  deleteNote(idx)
                }}
                className="cursor-pointer">
                <h2 className="rounded-full absolute top-6 right-5 bg-red-500 rounded-ful font-bold active:scale-95"><X /></h2>
                </button>

                <h3 className="leading-tight font-bold text-[20px] text-green-500">{elem.title}</h3>

                <p className="text-black">{elem.details}</p>
          </div>
            })}
          

        </div>
      </div>
    </div>
  );
};

export default App;
