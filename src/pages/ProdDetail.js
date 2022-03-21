import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";
const ProdDetail = () => {
    const [prod, setProd] = useState(null);
    const [loading, setloading] = useState(false);
    const { id } = useParams();
    let it = id;

    useEffect(() => {
        const apiFet = async () => {
            setloading(true);
            const rep = await fetch(`https://fakestoreapi.com/products/${id}`);

            setProd(await rep.json());
            setloading(false);
        };
        apiFet();
    }, []);
    console.log(prod);
    const Loading = () => {
        return <h1>Loading.....</h1>;
    };
    const Moading = () => {
        return (
            <>
                {prod && (
                    <div className="detail">
                        <div className="detail__img">
                            <img width="100%" height="100%" src={prod.image} alt="" />
                        </div>
                        <div className="detail__contant">
                            <h3>{prod.category}</h3>
                            <h2>{prod.title}</h2>
                            <p>{prod.description}</p>
                            <h4>${prod.price}</h4>
                            <div className="rating">
                                {prod.rating.rate}
                                {prod.rating.rate > 3.5 ? (
                                    <p>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                    </p>
                                ) : prod.rating.rate > 2.5 ? (
                                    <p>

                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                    </p>
                                ) : prod.rating.rate > 1.5 ? (
                                    <p>

                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                    </p>
                                ) : prod.rating.rate > 4.5 ? (
                                    <p>

                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                    </p>
                                ) : <p>


                                    <i className="fa fa-star"></i>
                                </p>
                                }
                            </div>
                        </div>
                    </div>
                )}
            </>
        );
    };
    return (
        <>
            <NavBar />
            {loading ? <Loading /> : <Moading />}
        </>
    );
};

export default ProdDetail;
