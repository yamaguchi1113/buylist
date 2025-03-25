import ShoppingListItem from "./ShoppingListItem.jsx"
import "./ShoppingList.css"
export default function ShoppingList({items}) {
    return (
        <ul className="shoppinglist">
            {
            items.map(i => (
                <ShoppingListItem 
                key={i.id} 
                item={i.item} 
                quantity={i.quantity} 
                completed={i.completed}
                imageUrl={i.imageUrl}
                //{...i}
            />
            ))}
        </ul>
    )
}