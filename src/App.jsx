import './App.css';
import Demo from './demo.jsx';  

function App() {
  console.log("hello hey");
  let a = 5;
  let b = 6;
  let c = a + b;
  console.log(c);
  
  return (
    <>
      <h1>Hello World</h1>
      <p>new here {c}</p>
      <Demo name = "hello" message = "WORLD" />    
      <Demo />   
       

    </>
  );
}

export default App;

