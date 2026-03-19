
import Counter from './counter'
import Batsman from './Batsman'
import './App.css'

function App() {
  function handleClick(){
    alert('I am clicked');
  }

const handleClick3 = () => {
  alert('I am clicked 3');
}

const handleAdd5 = (num) => {
  const newNum = num + 5;
  alert(newNum);
}

  return (
    <>
          <h1>Get started</h1>

          <Batsman></Batsman>

          <Counter></Counter>

          <button onClick={handleClick}>Click Me</button>
          <button onClick={function handleClick(){
            alert('I am clicked 2');
          }}>Click Me2</button>
          <button onClick={handleClick3}>Click Me3</button>
          <button onClick={() => alert('I am clicked 4')}>Click Me4</button>
          <button onClick={() => handleAdd5(7)}>Click Add 5</button>

    </>
  )
}

export default App
