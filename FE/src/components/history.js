import { useState } from "react";
import InfoWithHistory from "./infoWithHistory.js";
import TradeInfoDetail from "./tradeInfoDetail.js";

function History({data}){
    const [isDetail, setIsDetail] = useState(false)
    const [chosenData, setChosenData] = useState({})
    return(
        <div>
            {
                isDetail==false ? 
                <div style={{marginLeft:"70px"}}>
                {data.map((el)=>{
                    return <InfoWithHistory key={el.tradeCode} data={el} setIsDetail={setIsDetail} setChosenData={setChosenData}/>
                })}
                </div> : <TradeInfoDetail data={chosenData} setIsDetail={setIsDetail}/>
            }
        </div>
    )
}

export default History;