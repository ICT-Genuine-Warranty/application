import Search from './search.js'
import ItemInfoBar from './itemInfoBar.js'

function StatusBar({status, setStatus,itemCode,setItemCode}){
    return(
        <div>
            {status==="main" ? <Search setStatus={setStatus} setItemCode={setItemCode} itemCode={itemCode}/> : <ItemInfoBar setStatus={setStatus} itemCode={itemCode} setItemCode={setItemCode}/>}
        </div>
    )
}

export default StatusBar;