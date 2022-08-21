import line from './img/line.png'
import {Button} from 'react-bootstrap'
let TYPE = ["제조","유통","공식판매","중고거래"]

function InfoWithHistory({data, setIsDetail, setChosenData}){
    return(
        <div style={{display:"flex"}}>
            <div style={{display:"block", width:"100px", marginTop:"8px"}}>
                {data.traded}
            </div>
            <div>
                <img src={line} height={'100px'}/>
            </div>
            <div  style={{display:"block", marginTop:"8px"}}>
                <div style={{display:"flex"}}>
                    <div><h5 style={{fontWeight:"bold"}}>{TYPE[data.type]}</h5></div>
                    <div style={{marginLeft:"20px"}}><Button style={{backgroundColor:"#cfcfcf", color:"#ffffff"}}variant="light" size="sm"
                    onClick={()=>{setChosenData(data);setIsDetail(true)}}>
                        정보 더보기</Button></div>
                </div>
                <div style={{display:"flex"}}>
                    판매자: {data.sellerId}
                </div>
                <div style={{display:"flex"}}>
                    구매자 : {data.buyerId}
                </div>
            </div>
        </div>
    )
}

export default InfoWithHistory;