// import Navbar from "./components/Navbar";
// import Home from "./Pages/Home";
// import SignIn from "./Pages/SignIn";
// import globalContext from "./context/globalContext";
// import About from "./Pages/About";
// import Company from "./Pages/About/Containers/Company";
import AppRouter from "./components/AppRouter";
import "./App.css";


const App = () => {

  return (
    <div className="App">
      <AppRouter />
    </div>
  );
};

export default App;
