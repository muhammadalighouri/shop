import React, { useState, useEffect } from 'react'
import NavBar from "../components/NavBar"
import Products from '../components/Products'



const Home = ({ catagory }) => {

    const [product, setProduct] = useState([])
    const [data, setData] = useState([])
    const [loading, setloading] = useState(false)

    var upList
    let mo = true;



    const filterArray = (arr) => {
        let terArr = data.filter(item => {
            return item.category === arr;
        })
        setProduct(terArr)
        console.log(product);
    }
    const apiFetch = async () => {

        const rep = await fetch('https://fakestoreapi.com/products')
        if (mo) {

            const data = await rep.json()
            setProduct(data)
            setData(data)

        }

        return () => {
            mo = false
        }
    }



    useEffect(() => {
        apiFetch()

    }, [])


    return (
        <>
            <NavBar />
            {
                <Products catagor={catagory} filterArray={filterArray} product={product} />
            }

        </>
    )
}

export default Home
