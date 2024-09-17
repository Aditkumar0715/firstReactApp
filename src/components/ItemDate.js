import './ItemDate.css';
function ItemDate(props){
    return(
        <div className='date-container'>
            {/* <span>15 / </span>
            <span>July / </span>
            <span>2003</span> */}

            <span className='month'>{props.month}</span>
            <span className='year'>{props.year}</span>
            <span className='day'>{props.day}</span>
            {props.children}
        </div>
    );
}

export default ItemDate;