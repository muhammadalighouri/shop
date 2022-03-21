import React from 'react'
import { useNavigate, useParams } from "react-router-dom";
const Products = ({ product, filterArray, catagor }) => {

    const Navigate = useNavigate()
    return (
        <>
            <div className="products">
                <div className="filter__grid">

                    <button onClick={() => filterArray('electronics')}>Electronics</button>
                    <button onClick={() => filterArray("men's clothing")}>Men</button>
                    <button onClick={() => filterArray("women's clothing")}>women</button>
                    <button onClick={() => filterArray("jewelery")}>jewelery</button>

                </div>
                <div className="item__grid">
                    {
                        product.map((item) => {
                            return (
                                <div onClick={() => Navigate(`/product/${item.id}`)} key={item.id} className="prod__item">
                                    <div className="img">
                                        <img width='100%' height="100%" src={item.image} alt="" />
                                    </div>
                                    <div className="content">
                                        <div className="title">
                                            {item.title}
                                        </div>
                                        <div className="bottom">
                                            <div className="price">
                                                {item.price}
                                            </div>
                                            <button>
                                                Add to Chart
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>

            </div>
        </>
    )
}

export default Products