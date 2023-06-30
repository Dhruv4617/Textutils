import React,{useState} from 'react'

    
export default function Textform(props) {
  const handleUpClick = ()=>{
    //console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText("newText")
  }
  const handleOnChange =(event)=>{
    //console.log("On change");
    setText(event.target.value);
  }
  const handleloClick = ()=>{
    //console.log("Uppercase was clicked" + text);
    let newText2 = text.toLowerCase();
    setText("newText");
  }
  
  const handleClClick =()=> {
    //console.log("Uppercase was clicked" + text);
    let textcl = ' ';
    setText(" ");
  }
  
  const [text, setText] = useState(' '); 
  return (
    <>
      <div className="cointainer" style={{color:props.mode==='dark'? 'white' :'#042743'}}>
        <h1>
            {props.heading}
        </h1>

         <div className="mb-3">
            
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'? 'grey' :'white', color:props.mode==='dark'? 'white' :'#042743'}}id="myBox" rows="8"></textarea>
         </div>
         <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to upper className</button>
         <button className="btn btn-primary mx-1" onClick={handleloClick}>Convert to Lower className</button>
         <button className="btn btn-primary mx-1" onClick={handleClClick}> clear Text </button>
      </div>
      <div className="cointainer my-3" style={{color:props.mode==='dark'? 'white' :'#042743'}}>
        <h2>Your Text Summary</h2>
        <p>{text.split(" ").length} words and {text.length}characters </p>
        <h2> Preview </h2>
        <p>{text.length>0?text:"Enter something in the above textbox to preview it here"}</p>
      </div>
    </>
  )
}
