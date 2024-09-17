import './Item.css';
function Item(props){
    return(
        <p className='item'>{props.name}</p>
    );  
}

export default Item;