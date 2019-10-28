import React, { FunctionComponent } from 'react'
import './Items.css'
import { Link } from 'react-router-dom'

export type ShopItemProps = {
    name: string,
    id: string,
    price: number,
    image: string,
    large?: boolean
}

const ShopItem : FunctionComponent<ShopItemProps> = ( { name, id, price, image, large } ) => (
    <Link className='shop-item' to={`/shop/${id}`} key={id}>
        <img className='shop-item-image' src={image} alt='shop item' />
        <div className='shop-item-name'>{name}</div> 
        <div className='shop-item-price'>{`$${price}`}</div>
    </Link>
)

export default ShopItem