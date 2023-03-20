import { useDispatch, useSelector } from "react-redux";
import "../App.css";
import { remove } from "../store/cartSlice";
export function Cart({Count,Total,setCount,setTotal}) {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.cart);
    console.log("thsi is data");
    console.log(data);
    const handleRemove = (productId) => {
        dispatch(remove(productId));
        setCount(Count-1);
    }
    return (

            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-xs-12 py-5 px-5 cart-css">
                        {data.map((item) => (
                            <div className="card mb-3" style={{ maxWidth: 540 }} key={item.id}>
                                <div className="row g-0">
                                    <div className="col-md-4">
                                        <img src={item.image} className="img-fluid rounded-start" alt="..." />
                                    </div>
                                    <div className="col-lg-8">
                                        <div className="card-body">
                                            <h5 className="card-title">{item.title.substring(0,30)}...</h5>
                                            <p className="card-text"><b>{item.category}</b></p>
                                            <p className="card-text"><b>${item.price}</b></p>
                                            <button className="btn btn-danger" onClick={() => handleRemove(item.id)}>Remove to cart</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="col-md-4 col-xs-12">
                        <h1>This is col 4!</h1>
                    </div>

                </div>
            </div>

    )
}
