import { useEffect, useState } from "react";
import { GitProfile } from "./components/GitProfile";
import { InputForm } from "./components/InputForm";

function App() {
  const [gitUsername, setGitUsername] = useState("");
  const [gitProfile, setGitProfile] = useState(null);
  

  const handleNameChange = (event) => {
    const name = event.target.value;
    setGitUsername(name);
  }

  const submitGitName = (event) => {
    event.preventDefault();
    
    const gitUrl = "https://api.github.com/users/" + gitUsername;
    fetch(gitUrl)
    .then((response)=>response.json())
    .then((json)=>setGitProfile(json))
    .catch((error)=>console.log(error));
  }

  useEffect(()=>{
    console.log(gitProfile);
  },[gitProfile]);

  return (
    <div>
      {gitProfile === null ? <InputForm onChange={handleNameChange} onSubmit={submitGitName}/> : <GitProfile profile={gitProfile}/>}
      
    </div>
  );
}

export default App;
