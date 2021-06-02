import {Tab, Tabs} from 'react-bootstrap'
import SingleBook from './SingleBook'


const BookList =(props)=>(
    <Tabs defaultActiveKey="fantasy" id="uncontrolled-tab-example">
        <Tab eventKey="home" title="fantasy">
                <SingleBook name={props['fantasy']}/>
        </Tab>
        <Tab eventKey="history" title="history">
                <SingleBook name={props['history']}/>
        </Tab>
        <Tab eventKey="horror" title="horror" >
                <SingleBook name={props['horror']}/>
        </Tab>
        <Tab eventKey="romance" title="romance">
                <SingleBook name={props['romance']}/>
        </Tab>
        <Tab eventKey="scifi" title="scifi" >
                <SingleBook name={props['scifi']}/>
        </Tab>
</Tabs>

)
export default BookList