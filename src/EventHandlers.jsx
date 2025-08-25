import { useState } from "react";

function App() {
  const [text, setText] = useState("");

  // event handler function
  const handleChange = (e) => {
    setText(e.target.value); // event.target.value is to track the current input value
  };

  const [checked, setChecked] = useState(false);

  const handleCheckbox = (event) => {
    setChecked(event.target.checked); // true or false
  };

  const [fruit, setFruit] = useState("");

  const handleSelect = (event) => {
    setFruit(event.target.value);
  };

  const [age,setAge]=useState("");

  const handleAge=(e)=>{
    setAge(e.target.value);
  };

  return (
    <div>
      <input type="text" value={text} onChange={handleChange} />
      <p>You typed: {text}</p>
    
      <input type="checkbox" checked={checked} onChange={handleCheckbox} />
      <p>{checked ? "Checked!" : "Not Checked!"}</p>

      <select value={fruit} onChange={handleSelect}>
        <option value="">Select a fruit</option>
        <option value="apple">Apple </option>
        <option value="banana">Banana </option>
      </select>
      <p>You selected: {fruit}</p>

      <input type="number" value={age} onChange={handleAge}/>
      <p>{age>18 ? `your current age is ${age} , above 18 and legal` : `under-age , not allowed`}</p>

    </div>

  );
}

export default App;
