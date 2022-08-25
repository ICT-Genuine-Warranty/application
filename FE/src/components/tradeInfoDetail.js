function TradeInfoDetail({data,setIsDetail}){
    return(
        <div>
            <div style={{ width:"80px", marginBottom:"10px",paddingLeft:"5px",paddingRight:"5px", borderRadius:'5px', marginLeft:'420px', marginRight:'20px', backgroundColor:'#E9E9E9', color:'#888888', fontSize:"small"}}
             onClick={()=>{setIsDetail(false)}}>
                &lt; 뒤로가기
            </div>
            <div style={{ backgroundColor:"#E9E9E9", width:'500px', borderRadius:'5px'}}>
                <div>거래 방식:{data.type}</div>
                <div>구매자:{data.seller}</div>
                <div>판매자:{data.buyer}</div>
                <div>사용 플랫폼:{data.platform}</div>
                <div>거래 날짜:{data.traded}</div>
            </div>
            <div style={{ marginTop:"30px", backgroundColor:"#E9E9E9", width:'500px', borderRadius:'5px'}}>
                <div>판매자 : {data.comments.sellersComment.owner}</div>
                <div>{data.comments.sellersComment.commentURI}</div>
            </div>
            <div style={{ marginTop:"30px", backgroundColor:"#E9E9E9", width:'500px', borderRadius:'5px'}}>
                <div>구매자 : {data.comments.buyersComment.owner}</div>
                <div>{data.comments.buyersComment.commentURI}</div>
            </div>
        </div>
    )
}

export default TradeInfoDetail;