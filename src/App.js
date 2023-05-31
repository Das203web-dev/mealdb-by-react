import './App.css';
import Header from './component/Header/Header';
// import MealList from './component/LoadData/LoadData';
import LoadData from './component/LoadData/LoadData';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <h1>Food And Cart Section</h1>
      <div><input type="text" /><button>Search</button></div>
      <LoadData></LoadData>
    </div>
  );
}

export default App;
