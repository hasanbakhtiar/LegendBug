import React from 'react'
import ProductItem from './ProductItem'
import data from '../data/data';



const Product = () => {
    return (
        <div>
            <h1 className="text-center">Product</h1>
            <div className="row">
                {data.productData.map( (item,index)=>{
                            return(
                                <ProductItem img={item.img}
                                title={item.title}
                                desc={item.desc}
                                price={item.price}
                                item={item}
                                key={index}
                                
                                
                                />

                            )
                })}

            </div>
        </div>
    )
}

export default Product
