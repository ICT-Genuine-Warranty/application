import Preview from "../components/preview";
import ItemPage from "./itemPage";
import SignPage from "./sign";

function Main({status,setStatus,setUserInfo,userInfo}){
       return(
        <div>
            {status==="main" ? <Preview/>:null}
            {status==="item" ? <ItemPage/>:null}
            {status==="sign" ? <SignPage userInfo={userInfo} setUserInfo={setUserInfo} setStatus={setStatus}/>:null}
        </div>
       )
}

export default Main;