
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';


function App() {
  return (
    <>
    <Navbar title= "Textutils" aboutText="About Textutils" />
    {/*<Navbar/>*/}
    <div className="cointainer my-1">

       <Textform heading= "Enter the text"/>
    </div>
   
    </>
  );
}

export default App;
