const User = (props) => {
  return (
    <>
      <h1>{props.name}</h1>
      <p>{props.full}</p>
      <h3>{props.children}</h3>
    </>
  );
};

export default User;

// import User from "./components/User";
// function App() {
//   return (
//     <>
//       <User name="ammaar" full="ammaarehsan">
//         <p> this is the child element</p>
//         <span>what will happen to you</span>
//       </User>
//     </>
//   );
// }

// export default App;
