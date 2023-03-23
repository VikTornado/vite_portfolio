import './App.css'
import SideNav from "./Components/SideNav.jsx";
import Main from "./Components/Main.jsx";
import Work from "./Components/Work.jsx";

function App(props) {
    return (
        <div>
            <SideNav/>
            <Main/>
            <Work data={props.data}/>
        </div>
    )
}

export default App



//https://www.youtube.com/watch?v=22CxRxryQFE