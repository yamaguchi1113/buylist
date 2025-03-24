import './App.css'
import ShoppingList from './ShoppingList.jsx'

const foods = [
  {id: 1, item: '卵', quantity: 12, completed: false},
  {id: 2, item: '牛乳', quantity: 1, completed: false},
  {id: 3, item: 'パン', quantity: 1, completed: true},
  {id: 4, item: 'バター', quantity: 1, completed: false},
];

const clothes = [
  {id: 5, item: 'Tシャツ', quantity: 3, completed: false},
  {id: 6, item: 'ズボン', quantity: 2, completed: true},
  {id: 7, item: '靴下', quantity: 5, completed: false},
  {id: 8, item: '靴', quantity: 1, completed: false},
];

function App() {

  return (
  <>  
  <ShoppingList items={foods} />
  <ShoppingList items={clothes} />
  </>
  )
}

export default App
