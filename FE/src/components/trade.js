import naver from './img/naverLogo.png'
import kream from './img/kreamLogo.png'
import junggo from './img/junggoLogo.png'
import carrot from './img/carrotLogo.png'
import coupang from './img/coupangLogo.png'
import thunder from './img/thunderLogo.png'

function Trade(){
    return(
        <div>
            <div style={{ backgroundColor:"#E9E9E9", width:'500px', borderRadius:'5px'}}>
                <div>
                     <div style={{display:"flex"}}>
                        <h1 style={{ marginLeft:"10px",marginTop:"20px",fontWeight:"bold"}}>구매하기</h1>
                    </div>
                    <div>
                        <div>사진</div>
                        <div>세부제품명: </div>
                        <div>제조일 : </div>
                        <div>거래횟수 : </div>
                        <div>최초 판매점 : </div>
                    </div>
                </div>
                <div style={{display:"flex"}}>
                    <h3 style={{ marginLeft:"10px",marginTop:"20px",fontWeight:"bold"}}>거래 플랫폼 선택</h3>
                </div>
                <div style={{display:"flex"}}>
                <div><img style={{width:"100px", margin:"10px"}} src={kream}/></div>
                <div><img style={{width:"100px", margin:"10px"}}  src={junggo}/></div>
                <div><img style={{width:"100px", margin:"10px"}}  src={carrot}/></div>
                <div><img style={{width:"100px", margin:"10px"}}  src={coupang}/></div>
                </div>
                <div style={{display:"flex"}}>
                <div><img style={{width:"100px", margin:"10px"}}  src={naver}/></div>
                <div><img style={{width:"100px", margin:"10px"}}  src={thunder}/></div>
                </div>
                
            </div>
        </div>
    )
}
export default Trade;