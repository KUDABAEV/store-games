import React, {useState} from "react";
import {useSelector} from "react-redux";
import {BsCart2} from "react-icons/bs";
import {useNavigate} from "react-router-dom";
import {CartMenu} from "../cart-menu";
import {calcTotalPrice} from "../utils";
import {ItemsInCart} from "../items-in-cart";
import './cart-block.css';

export const CartBlock = () =>{
    const [isCartMenuVisible, setIsCartMenuVisible] = useState(false);
    const items = useSelector(state => state.cart.itemsInCart);
    const totalPrice = calcTotalPrice(items);
    const navigate = useNavigate();

    const handleClick = () => {
        setIsCartMenuVisible(false);
        navigate(`/order`);
    }
    return (
        <div className='cart-block'>
            <ItemsInCart quantity={items.length} />
            <BsCart2 size={30} className='cart-block__icon' onClick={() => setIsCartMenuVisible(!isCartMenuVisible)}/>
            {totalPrice > 0 ? <span className='cart-block__total-price'>{totalPrice} руб</span> : null}
            {isCartMenuVisible && <CartMenu items={items} onClick={handleClick}/>}
        </div>
    )
}