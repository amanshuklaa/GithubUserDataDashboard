import React ,{useState} from 'react'
import DisplayTable from './DisplayTable'


const Profile = ()=>{
    const [data,setData] = useState({})
    const [username, setUserName] = useState("")
    const [repositories,setRepositories] = useState([])
    const [displayTable,setDisplayTable] = useState(false)
    const handleUserNameChange = (e)=>{
        let repoName = e.target.value;
        setUserName(repoName)
        
    }
    const handleSubmit =async (e)=>{
        e.preventDefault();
        const profile = await fetch(`https://api.github.com/users/${username}`);
        const profileJson = await profile.json();
        console.log(profileJson);
    
        const repositories = await fetch(profileJson.repos_url);
        const repoJson = await repositories.json();
        console.log(repoJson);
        if(profileJson){
            setDisplayTable(true)
            setData(profileJson)
            setRepositories(repoJson)
        }else{
            setDisplayTable(false)
        }
    }
    return (
        <>
        <div style ={{padding: 20}}>
            <div className ="ui search">
            <div className="ui icon input">
            <i className="search icon">

            </i>
            <input 
            className="prompt"
            placeholder="search username here"
            type="text" value={username} onChange={handleUserNameChange}></input>

            </div>
            <button className="ui primary button"
             type="submit" onClick={handleSubmit}
            >
                <i className="github icon"></i>
                Search

            </button>
          {displayTable ?
            <DisplayTable data={data} repositories={repositories}/>:""}
            </div>
        </div>
        </>
    )
}

export default Profile
