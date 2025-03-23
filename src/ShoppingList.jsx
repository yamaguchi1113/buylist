export default function ShoppingList({items}) {
    return (
        <ul>
            {items.map(i =>
                <li style = {{ color: i.completed ? 'red' : 'black' }}>
                    { i.item } - {i.quantity}
                </li>
            )}
        </ul>
    )
}