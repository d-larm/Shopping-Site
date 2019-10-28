import React, { useState, useEffect, FunctionComponent } from 'react'
import { withRouter } from 'react-router-dom'
import { ShopItemProps } from '../components/ShopItem'
import Container from '../components/Container'
import Shirt from '../assets/shirt.jpg'

import '../components/Items.css'

const ItemPage : FunctionComponent<any> = ( { match } ) => {

    interface Item extends ShopItemProps {
        description: string,
        sizes: Array<String>,
    }


    const [ itemInfo, setItemInfo ] = useState( { } )


    useEffect(() => {
        const getItemData = async () => {
            const itemData = {
                id: match.params.id,
                image: Shirt,
                name: 'Shirt',
                description: 'A plain black fabric tee for all your needs',
                price: 20,
                sizes: [ 'S', 'M', 'L', 'XL' ]
            }
            setItemInfo( itemData )
        }

        getItemData()
    }, [] )

    const { name, image, id, price, description } = itemInfo as Item

    return (
        <>
            <Container large>
            <div className='item-page'>
                <img className='item-page-image' src={image} alt='shop item' />
                <div className='item-page-name'>{name}</div> 
                <div className='item-page-price'>{`$${price}`}</div>
                <div className='add-basket-button'>Add to Basket</div>
                <div className='item-page-description'>{description}</div>
            </div>
            </Container>
        </>
    )
}

export default withRouter(ItemPage)