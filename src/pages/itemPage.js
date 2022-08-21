import { Tab,Tabs } from 'react-bootstrap';
import ItemInfo from '../components/itemInfo';
import History from '../components/history';
import Trade from '../components/trade';
import history from '../dummy/history.json'

function ItemPage({itemCode}){
    
    return(
        <div style={{ width:'500px', marginTop:'250px'}}>
            <div>
            <Tabs
            defaultActiveKey="profile"
            id="tabs_selection"
            className="mb-3"
            justify="true"
            >
            <Tab eventKey="info" title="제품 정보">
                <ItemInfo/>
            </Tab>
            <Tab eventKey="history" title="거래 기록">
                <History data={history}/>
            </Tab>
            <Tab eventKey="trade" title="거래 하기" >
                <Trade/>
            </Tab>
            </Tabs>
            </div>
        </div>
    )
}

export default ItemPage;