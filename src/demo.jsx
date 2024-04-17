const Demo = (props) => {  
    console.log(props);
    return (
      <>
        <h1>hello</h1>
        <p>message.{props.name}</p>
      </>
      
    );
  }
  
  export default Demo;  
  