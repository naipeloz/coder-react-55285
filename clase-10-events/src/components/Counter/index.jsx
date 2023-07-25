const InputCount = ({ label }) => {
  return (
    <>
      <input type="text" placeholder={label}/>
    </>
  )
}

const ButtonCount = ({ label }) => {
  return (
    <>
      <button>
        {label}
      </button>
    </>
  )
}

const CountComponent = ({ inputType = 'input'}) => {
  const CounterElement = inputType === 'input' ? InputCount : ButtonCount;
  return(
    <div>
      <h1>Counter</h1>
      <CounterElement 
        label="Mi primer counter"
      />
    </div>
  )
}

export default CountComponent;
