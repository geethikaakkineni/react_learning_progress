import Header from './header.jsx'
import Footer from './Footer.jsx'
import Food from './Food.jsx'
import Card from './Card.jsx'
import Button from './button_component/Button.jsx'
import Button2 from './Button2.jsx'
import Studata from './Studata.jsx'

function App() {
  return(
    <>
      <Studata name="abc" profession="student" age={21}></Studata>
      <Studata name="def" profession="teacher" age={36}></Studata>
      <Studata name="ghi" profession="incharge" age={19}></Studata>
      
      
    </>
  );


}

export default App;
