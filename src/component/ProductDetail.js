import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom";

function ProductDetail(){

    const [productData,setProductData]=useState({});
    const navigate=useNavigate();
    const {id}=useParams();

    // side effect
    useEffect(()=>{
        fetch(`https://fakestoreapi.com/products/${id}`)
        .then(res=>res.json())
        .then(data=>{
            setProductData(productData);
            console.log("data:"+productData);
        })
    },[]);
    return(
        <div className="container">
            <button className="btn btn-primary" onClick={()=>{navigate("/")}}>Back</button>
            <h1>{productData}</h1>
        </div>
    )
}
export default ProductDetail;