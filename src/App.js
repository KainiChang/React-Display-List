import React from 'react';

function App() {
  const names=["Janmes","Kaini","Johney","David"]
  console.log(names)
  return (
    names.map((item)=>   
    <p>
     {item}
    </p>
  ))
}

export default App;
