import './App.css'
import ShoppingList from './ShoppingList.jsx'

const data = [
  {item: '卵', quantity: 12, completed: false},
  {item: '牛乳', quantity: 1, completed: false},
  {item: 'パン', quantity: 1, completed: true},
  {item: 'バター', quantity: 1, completed: false},
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
