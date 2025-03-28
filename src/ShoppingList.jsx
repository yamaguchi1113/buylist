import ShoppingListItem from "./ShoppingListItem.jsx"
import "./ShoppingList.css"
export default function ShoppingList({items, completedItem}) {
    return (
        <ul className="shoppinglist">
            {
            items.map(i => (
                <ShoppingListItem 
                key={i.id} 
                {...i}
                completedItem={completedItem}
            />
            ))}
        </ul>
    )
}