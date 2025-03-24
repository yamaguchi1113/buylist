export default function ShoppingListItem({item, quantity, completed}) {
    return(
    <li style = {{ color: completed ? 'black' : 'red', 
        textDecoration: completed ? 'line-through' : 'none' 
        }}>
        {item}: {quantity}
    </li>)
}