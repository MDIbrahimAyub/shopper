import { useContext } from "react"
import { ShopContext } from "../Context/ShopContext"
import { useParams } from "react-router-dom";
import Breadcrumb from "../Components/breadcrums/Breadcrumb";
import Productdisplay from "../Components/productdisplay/Productdisplay";
import Discritionbox from "../Components/discriptionbox/Discriptionbox";
import Relatedproduct from "../Components/Relatedproduct/Relatedproduct";

const Product = () => {
  const {all_product} = useContext(ShopContext);
  const {productID} = useParams();
  const product = all_product.find((e)=> e.id === Number(productID));
  return (
    <div>
      <Breadcrumb product={product}/>
      <Productdisplay product={product}/>
      <Discritionbox/>
      <Relatedproduct/>
    </div>
  )
}

export default Product