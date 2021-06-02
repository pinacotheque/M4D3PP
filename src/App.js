import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import WarningSign from './components/WarningSign';
import MyBadge from './components/MyBadge'

function App() {
  return (
    <div>
      <WarningSign title="bookstore"/>
      <MyBadge text="Badge" color="danger"/>
    </div>
  );
}

export default App;
