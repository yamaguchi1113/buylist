import ShoppingListItem from "./ShoppingListItem.jsx"
export default function ShoppingList({items}) {
    return (
        <ul>
            {
            items.map(i => (
                <ShoppingListItem 
                key={i.id} 
                item={i.item} 
                quantity={i.quantity} 
                completed={i.completed}
                //{...i}
            />
            ))}
        </ul>
    )
}