// import React, { useEffect, useState } from "react";
// import '../styles/App.css';

// const App = () => {

//   let [count, setCount] = useState(0)

//   return (
//     <div className="ball">
//       <h1  onClick={(e) => { alert(e.detail) }}>{count}</h1>
//       <button  onClick={() => { setCount(count + 1) }}>Increment</button>
//     </div>
//   )
// }


// export default App;
// // className={count} at line 10 
// // className={increment-button} at line 11

import React, { useEffect, useState } from "react";
import '../styles/App.css';

const App = () => {

  let [count, setCount] = useState(0);
  const handleDouble = () => { alert("cant edit it") };
  const handleClicks = () => { setCount(count + 1) };
  

  return (
    <div className="ball">
      <h1 className="count" onDoubleClick={handleDouble}>{count}</h1>
      <button className='increment-button' onClick={handleClicks}>Increment</button>
    </div>
  )
}


export default App;