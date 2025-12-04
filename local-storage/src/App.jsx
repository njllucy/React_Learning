import React from 'react'

const App = () => {
  //to clear localstorage
  // localStorage.clear();
  //to clear sessionstorage
  // sessionStorage.clear();
  // localStorage.setItem('name','Lucyyyyy');
  const user = localStorage.getItem('name');
  console.log(user);
  return (
    <div>
      
    </div>
  )
}

export default App
