import { useDispatch, useSelector } from "react-redux";
import "../App.css";
import { Footer } from "./Footer";
import { remove } from "../store/cartSlice";
export function Cart({ Count, Total, setCount, setTotal }) {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.cart);
    console.log("thsi is data");
    console.log(data);
    const handleRemove = (productId) => {
        dispatch(remove(productId));
        setCount(Count - 1);
    }
    return (

       <>
        <div className="container">
            <div className="row">
                <div className="col-lg-8 col-xs-12 py-5 px-5 cart-css">
                    {data.map((item) => (
                        <div className="card mb-3 card-5" style={{ maxWidth: 540 }} key={item.id}>
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src={item.image} className="img-fluid rounded-start" alt="..." />
                                </div>
                                <div className="col-lg-8">
                                    <div className="card-body">
                                        <h5 className="card-title">{item.title.substring(0, 30)}...</h5>
                                        <p className="card-text"><b>{item.category}</b></p>
                                        <p className="card-text"><b>${item.price}</b></p>
                                        <button className="btn btn-danger" onClick={() => handleRemove(item.id)}>Remove to cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="col-md-4 col-xs-12 d-flex align-items-center">
                    <div className="container">
                        <div class="row custom-div">
                            <div class="col"><strong>Total Amount</strong></div>
                            <div class="col"><strong>$60</strong></div>
                            <div class="w-100"></div>
                            <div class="col"><strong>Delivery Charges</strong></div>
                            <div class="col"><strong>$10</strong></div>
                            <div class="w-100"></div>
                            <hr></hr>
                            <div class="w-100"></div>
                            <div class="col"><strong>Grand Total</strong></div>
                            <div class="col"><strong>$10</strong></div>
                            <hr></hr>
                        </div>
                            <button style={{width:"100%"}} className="btn btn-primary">Proceed to Checkout</button>
                    </div>
                </div>

            </div>
        </div>
        <Footer/>
       </>

    )
}
