import { useState, useEffect } from 'react';

export const Card = () => {
    const [card, setCard] = useState([]);
    const [loading, setLoading] = useState([]);
    const fetchCards = () => {
        fetch('https://api.escuelajs.co/api/v1/products')
            .then(res => res.json())
            .then(response => {
                setCard(response);
                setLoading(false)
            });
    }
    useEffect(() => {
        console.log("Reloaded")
        fetchCards();
    }, [])

    return loading ? (

        <div class="container">
            <div class="row ">
                <SetLoading />
            </div>
        </div>

    ) : (
        card.map(el => (
            <div class="card col-12 col-lg-3  col-md-4 col-sm-6 p-0 d-flex mt-3">
                <img src={el.images} class="card-img-top" alt="..." />

                <div class="card-body">
                    <h5 class="card-title">{el.title}</h5>
                    {/* <p class="card-text">{el.id}</p> */}
                    <p class="card-text">{el.description}</p>
                    <a href="#" class="btn btn-primary">View</a>
                </div>
            </div>

        ))
    )
}


function SetLoading() {
    const [loading, setLoading] = useState([]);
    const fetchCards = () => {
        fetch('https://api.escuelajs.co/api/v1/products')
        .then(res => res.json())
        .then(response => {
            setLoading(response);
        });
    }
    useEffect(() => {
        console.log("Reloaded")
        fetchCards();
    }, [])
    return (
        <>
            {
                loading.map(el => (
                    <div class="card card col-12 col-lg-3 col-sm-6 col-md-4" aria-hidden="true">
                        <img src="https://th.bing.com/th/id/R.2e9c6878eae5bbcdaa2d07ed4dbd79b8?rik=P1ufyvCQlv7Dyw&pid=ImgRaw&r=0" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title placeholder-glow">
                                <span class="placeholder col-6"></span>
                            </h5>
                            <p class="card-text placeholder-glow">
                                <span class="placeholder col-7"></span>
                                <span class="placeholder col-4"></span>
                                <span class="placeholder col-4"></span>
                                <span class="placeholder col-6"></span>
                                <span class="placeholder col-8"></span>
                            </p>
                            <a class="btn btn-primary disabled placeholder col-6"></a>
                        </div>
                    </div>
                ))
            }
        </>
    )
}