import type {TypeProduct} from "../types/products";
type propsShow = {
   person :TypeProduct
}
const ShowInfo = (props :propsShow) => {
    console.log(props);
    return (
        <div>Show info</div>
    )

    
}

export default ShowInfo;