import './ShoppingListItem.css';

export default function ShoppingListItem({item, quantity, completed, imageUrl}) {
    return(
    <li className="shopping-list-item" 
        style={{ color: completed ? 'black' : 'red',
        textDecoration: completed ? 'line-through' : 'none' }}>
        <img src={imageUrl} alt={item} className="item-image" />
        {item}:<br/>{quantity}
    </li>)
}