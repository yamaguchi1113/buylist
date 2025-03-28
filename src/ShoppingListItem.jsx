import './ShoppingListItem.css';

export default function ShoppingListItem({id, item, quantity, completed, imageUrl, completedItem}) {
    return (
        <li className="shopping-list-item" 
            onClick={() => completedItem(id)} 
            style={{ textDecoration: completed ? 'line-through' : 'none' }}>
            <img src={imageUrl} alt={item} className="item-image" />
            {item}:<br/>{quantity}
        </li>
    )
}