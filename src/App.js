import logo from "./logo.svg";
import SignUp from "./signup";
import AdminConsole from "./admin";
import "./App.css";
import SingIn from "./signIn";

function App() {
  return (
    <div className="App">
      <SignUp></SignUp>
      <SingIn></SingIn>
      <AdminConsole></AdminConsole>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
