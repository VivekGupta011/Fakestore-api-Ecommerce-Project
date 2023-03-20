import { useEffect, useState } from "react"
// import { Link, NavLink } from "react-router-dom";
import "../App.css";
import { Link } from "react-router-dom";
import { fetchProducts } from "../store/productSlice";
import { STATUSES } from "../store/productSlice";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../store/cartSlice";
function ProductsItem({ Count, Total, setCount, setTotal }) {
    const dispatch = useDispatch();
    // data:products basically we changing the name of object data to products using Javscript
    // const {data:products,status}=useSelector((state)=>state.product);
    const { data, status } = useSelector((state) => state.product);


    // for filtering
    const [Clone, SetClone] = useState([]);


    useEffect(() => {
        dispatch(fetchProducts());
        console.log("This is data api:")
        console.log(data);
        // fetch('https://fakestoreapi.com/products')
        //     .then(response => response.json())
        //     .then(products => {
        //         setData(products);
        //         console.log(data);
        //     })
    }, []
    )

    useEffect(() => {
        handleAllFilter(data);
        console.log("clone:")
        console.log(Clone);
    }, [data])


    const temp = 0;
    const handleAdd = (product) => {
        dispatch(add(product));
        setCount(Count + 1);

    };

    // handle setFilter
    const handleFilter = (category, data) => {
        SetClone(data.filter((item) => item.category == category));

    }

    // handle All set Filter
    function handleAllFilter(data) {
        SetClone(data);
        // console.log("data");
        // console.log(Clone);
    }

    if (status === STATUSES.LOADING) {
        return <h2>loading....</h2>
    }
    if (status === STATUSES.ERROR) {
        return <h2>Something went Wrong!</h2>
    }
    return (
        <div>

            <h1 className="py-2 px-3">Welcome to the Redux Toolkit store</h1>
            <div className="d-flex" style={{ justifyContent: "space-evenly" }}>
                <button className="btn btn-secondary btn-sm" type="button" style={{ width: "10%", fontWeight: "900" }} onClick={() => { handleAllFilter(data) }}>All</button>
                <button className="btn btn-secondary btn-sm" type="button" style={{ width: "10%", fontWeight: "900" }} onClick={() => { handleFilter("men's clothing", data) }}>Men's Clothing</button>
                <button className="btn btn-secondary btn-sm" type="button" style={{ width: "10%", fontWeight: "900" }} onClick={() => { handleFilter("women's clothing", data) }}>Women Clothing</button>
                <button className="btn btn-secondary btn-sm" type="button" style={{ width: "10%", fontWeight: "900" }} onClick={() => { handleFilter("jewelery", data) }}>Jewelery</button>
                <button className="btn btn-secondary btn-sm" type="button" style={{ width: "10%", fontWeight: "900" }} onClick={() => { handleFilter("electronics", data) }}>Electronic</button>
            </div>
            <div className="Custom-responsive container">
                {
                    Clone.map((item) => (
                        <Link to={`/product/${item.id}`}>
                            <div className="card mb-3" key={item.id} style={{ maxWidth: 540 }}>
                                <div className="row g-0">
                                    <div className="col-md-4 p-3">
                                        <img src={item.image} className="img-fluid rounded-start" alt="..." />
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h5 className="card-title">{item.title}</h5>
                                            {/* <p className="card-text">{item.description}</p> */}
                                            <p className="card-text"><b>${item.price}</b> </p>
                                            <p className="card-text">rate:<b>{item.rating.rate}</b> & count:<b>{item.rating.count}</b></p>
                                            <p className="card-text"><small className="text-muted">Category:<b>{item.category}</b></small></p>
                                            <button className="btn btn-primary" disabled={false} onClick={() => handleAdd(item)}>Add to cart</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))
                }
            </div>
        </div>
    )

}
export default ProductsItem;
