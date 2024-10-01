import './App.css';
import Item from'./components/Item.js';
import ItemDate from './components/ItemDate.js';
const response = [
  {
    itemName : 'Microsoft',
    day : 15,
    month : 'July',
    year : 2003
  },
  {
    itemName : 'Google',
    day : 25,
    month : 'August',
    year : 2005
  },
  {
    itemName : 'Facebook',
    day : 5,
    month : 'May',
    year : 2000
  },
  {
    itemName : 'Netflix',
    day : 18,
    month : 'September',
    year : 2000
  },
  {
    itemName : 'Apple',
    day : 12,
    month : 'November',
    year : 1998
  },
  {
    itemName : 'Amazon',
    day : 16,
    month : 'October',
    year : 2004
  },
]
function App() {
  return (
    <div className="App">
      <h1>Hello React</h1>
      {/* <Item name = 'HP' />
      <ItemDate day = '15' month = 'july' year = '2003'/>
      <Item name = 'DELL' />
      <ItemDate day = '19' month = 'june' year = '2000' />
      <Item name = 'ASUS'/>
      <ItemDate day = '17' month = 'august' year = '2005' />
       */}

      <div className='container'>
        <div className='item-container'>
          <Item name = {response[0].itemName} />
          <ItemDate day = {response[0].day} month = {response[0].month} year = {response[0].year} > Date </ItemDate>
        </div>

        <div className='item-container'>
          <Item name = {response[1].itemName} />
          <ItemDate   day = {response[1].day} month = {response[1].month} year = {response[1].year}> Date </ItemDate>
        </div>

        <div className='item-container'>
          <Item name = {response[2].itemName} />
          <ItemDate  day = {response[2].day} month = {response[2].month} year = {response[2].year}> Date </ItemDate>
        </div>
        <div className='item-container'>
          <Item name = {response[3].itemName} />
          <ItemDate  day = {response[3].day} month = {response[3].month} year = {response[3].year}> Date </ItemDate>
        </div>
        <div className='item-container'>
          <Item name = {response[4].itemName} />
          <ItemDate  day = {response[4].day} month = {response[4].month} year = {response[4].year}> Date </ItemDate>
        </div>
        <div className='item-container'>
          <Item name = {response[5].itemName} />
          <ItemDate  day = {response[5].day} month = {response[5].month} year = {response[5].year}> Date </ItemDate>
        </div>
      </div>
    </div>
  );
}

export default App;
