import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import WarningSign from './components/WarningSign';
import MyBadge from './components/MyBadge'
import books from "./data/fantasy.json"
import SingleBook from './components/SingleBook'


function App() {
  return (
    <div>
      <WarningSign title="bookstore"/>
      <MyBadge text="Badge" color="danger"/>
      <SingleBook name={books}/>
    </div>
  );
}

export default App;
