import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [ user, setUser ] = useState({
    userName: "",
    password: "",
  });

  const checkLocalStorage = async () => {
    const userString = await localStorage.getItem("user");    //returns the user details
    const user = JSON.parse(userString);    //converts the user details to object

    if(user) {    
      console.log(`Welcome back ${user.userName}`);
    }
  }
  
  //When component mounts check if local storage has details
  useEffect(() => {
    checkLocalStorage();
  }, []);

  const handleChange = (e) => {
    e.preventDefault();   //prevents the browser from refreshing
    setUser({...user, [e.target.id] : e.target.value});
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    localStorage.setItem("user", JSON.stringify(user));

    
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>How To Persist A Logged-In User In React</h1>
      <input type="text" id="userName" placeholder="Username" value={user.userName} onChange={handleChange}/>
      <input type="text" id="password" placeholder="Password" value={user.password} onChange={handleChange}/> 
      <button>Login</button>
    </form>
  );
}

export default App;

