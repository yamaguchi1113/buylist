import './App.css'
import ShoppingList from './ShoppingList.jsx'

const foods = [
  {id: 1, item: '卵', quantity: 12, completed: false, imageUrl: '../image/egg.jpg'},
  {id: 2, item: '牛乳', quantity: 1, completed: false, imageUrl:'../image/milk.jpg'},
  {id: 3, item: 'パン', quantity: 1, completed: true, imageUrl:'../image/bread.jpg'},
  {id: 4, item: 'バター', quantity: 1, completed: false, imageUrl:'../image/batter.jpg'},
];

const clothes = [
  {id: 5, item: 'Tシャツ', quantity: 3, completed: false, imageUrl: '../image/T.jpg'},
  {id: 6, item: 'ズボン', quantity: 2, completed: true, imageUrl: '../image/pants.jpg'},
  {id: 7, item: '靴下', quantity: 5, completed: false, imageUrl: '../image/sock.jpg'},
  {id: 8, item: '靴', quantity: 1, completed: false, imageUrl: '../image/shoes.jpg'},
];

function App() {

  return (
  <>  
  <h1>買い物リスト</h1>
  <ShoppingList items={foods} />
  <ShoppingList items={clothes} />
  </>
  )
}

export default App
