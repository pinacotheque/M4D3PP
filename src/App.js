import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import fantasybooks from './data/fantasy.json'
// import historybooks from './data/history.json'
// import horrorbooks from './data/horror.json'
// import romancebooks from './data/romance.json'
// import scifibooks from './data/scifi.json'
import WarningSign from './components/WarningSign';
import MyBadge from './components/MyBadge'
import BookList from './components/BookList'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Registration from './components/Registration';


function App() {


  return (

    <>
    <Router>

      <Navbar/>
      <Switch>
        <Route exact path="/">
          <BookList books={fantasybooks}/>
         </Route>

         <Route path="/register">
           <Registration/>
        </Route>
      </Switch>
      {/* <Route exact path="/" exact render={(routerProps) => <BookList {...routerProps} books={fantasybooks} /> } /> */}

    </Router>
    </>
  );
}

export default App;
