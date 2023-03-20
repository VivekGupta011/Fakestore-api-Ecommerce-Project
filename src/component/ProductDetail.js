import axios from "axios";
import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom";
import { useNavigate, useParams } from "react-router-dom";

function ProductDetail() {

    const [productData, setProductData] = useState({});
    const navigate = useNavigate();
    const { id } = useParams();

    // side effect
    useEffect(() => {
        // fetch(`https://fakestoreapi.com/products/${id}`)
        // .then(res=>res.json())
        // .then(data=>{
        //     setProductData(data);
        //     console.log("Product data:")
        //     console.log(productData);
        // })
        axios.get(`https://fakestoreapi.com/products/${id}`).then((response) => {
            console.log(response.data);
            setProductData(response.data);
        })

    }, []);
    console.log("pr:")
    console.log(productData);
    console.log("pr:")
    return (
        <div className="container">
            {/* <button classNameName="btn btn-primary" onClick={()=>{navigate("/")}}>Back</button> */}
            <div className="card text-center" style={{ width:"18rem" }}>
               <div>
               <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" class="img-fluid" alt="..." />
               </div>
                <div className="card-body">
                    <h5 className="card-title">Special title treatment</h5>
                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <NavLink to="#" className="btn btn-primary">Go somewhere</NavLink>
                </div>
            </div>
        </div>
    )
}
export default ProductDetail;