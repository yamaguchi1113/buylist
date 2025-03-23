import './App.css'
import ShoppingList from './ShoppingList.jsx'

const data = [
  {id: 1, item: '卵', quantity: 12, completed: false},
  {id: 2, item: '牛乳', quantity: 1, completed: false},
  {id: 3, item: 'パン', quantity: 1, completed: true},
  {id: 4, item: 'バター', quantity: 1, completed: false},
];

function App() {

  return (
  <>  
  <ShoppingList items={data} />
  <ShoppingList items={data} />
  <ShoppingList items={data} />
  </>
  )
}

export default App
