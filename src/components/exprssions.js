const Exprssions = () => {
  const name = "silent";
  const age = NaN;
  const programming = "reactjs";
  const addition = (a, b) => a + b;
  const specialchoose = "slasher";
  return (
    <>
      <h1 className={specialchoose}> my name is {name}</h1>
      <p>
        my age is {age} <br /> lastly i am learning {programming}
      </p>
      <b>add two numbers {addition(10, 20)} </b>
    </>
  );
};

export default Exprssions;

//   const numbers = [1, 2, 3, 4, 5];

//   return (
//     <>
//       {numbers.map((number) => (
//         <ul key={Math.random() * 10}>
//           <li>{number}</li>
//         </ul>
//       ))}
//     </>
//   );
