
import React,{ useState } from 'react';
import './App.css';
//import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
//import Alert from './components/Alert';
{/*import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';*/}


function App() {
  const [mode, setMode] = useState('light');
  //const [alert, setAlert] = useState('null');

  

  
  const toggleMode= ()=>{
    if(mode==='light')
    {
      setMode('dark')
      document.body.style.backgroundColor = '#042743';
      //showAlert("Dark mode has been enable", "success")

    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white';
      //showAlert("Light mode has been enable", "success")
    }
  }
  return (
    <>
    {/*<Navbar title= "Textutils" aboutText="About Textutils" />*/}
    {/*<Navbar/>*/}
    {/*<Router>*/}
    <Navbar title="TextUtils"  mode = {mode}  toggleMode={toggleMode}/>
    {/*<Alert alert={alert}/>*/}

    <div className="cointainer my-3">
    {/*<Routes>
          <Route  path="/about"element={<About/>}>
           
          </Route>
          
          <Route exact path="/" element={<Textform heading= "Enter the text"  mode = {mode}/>}>
          
          </Route>
  </Routes>*/}
     <Textform heading= "Enter the text"  mode = {mode}/>
    </div>
    {/*</Router>*/}
   
    </>
  );
}
 
export default App;
