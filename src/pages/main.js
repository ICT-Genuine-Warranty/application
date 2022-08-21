import Preview from "../components/preview";
import ItemPage from "./itemPage";

function Main({status,setStatus}){
       return(
        <div>
            {status==="main" ? <Preview/>:null}
            {status==="item" ? <ItemPage/>:null}
        </div>
       )
}

export default Main;