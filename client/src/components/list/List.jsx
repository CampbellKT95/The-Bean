
const List = ({id, name, sizeClass}) => {
    return (
        <li className={sizeClass} key={id}>
            <a href={`#${name}`} alt={name}>{name}</a>
        </li>
    )
}

export default List;

