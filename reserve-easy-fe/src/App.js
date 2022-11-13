import "./App.css";
import SignInPage from "./Components/SignInPage";
import Navbar from "./Components/Navbar";
function App() {
  return (
    <div className="App">
        <head>
            <style>@import url('https://fonts.googleapis.com/css2?family=Inter:wght@200&display=swap');</style>
        </head>
        <Navbar/>
        <SignInPage/>
    </div>
  );
}

export default App;
