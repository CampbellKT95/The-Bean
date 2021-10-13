
const List = ({id, name, sizeClass}) => {
    return (
        <li className={sizeClass} key={id}>
            <a href="#" alt={name}>{name}</a>
        </li>
    )
}

export default List;

//need to include ternary operate for nav-item or hamburger-menu-item

//Will need to include url in ../data for the href later