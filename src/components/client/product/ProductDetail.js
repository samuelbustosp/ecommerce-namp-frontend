import { Link } from "react-router-dom";

const ProductDetail = ({idProduct,name,description,stock,img,price,idSubcategory}) => {
    return ( 
        <div className="bg-white container rounded-xl shadow-lg">
            <div className="flex justify-around my-9">
                <div className="">
                    <img
                        src={`http://localhost:8080${img}`}
                        alt={name}
                        className="w-full h-96 object-contain rounded-t-xl"
                    />
                </div>
                <div className="border rounded-2xl w-96 text-left py-4">
                    <h1 className="poppins-bold text-2xl ml-4">{name}</h1>
                    <p className="poppins-light text-lg ml-4 mb-2">{description}</p>
                    <p className="poppins-light text-lg ml-4 mb-16">
                        <Link to={`/subcategoria/${idSubcategory.name.toLowerCase()}`}>{idSubcategory.name}</Link></p>
                    <h1 className="poppins-regular text-4xl ml-4 mb-16">${price}
                        <span className="ml-1 text-xl">ARS</span>
                    </h1>
                    {stock > 0 ? 
                        (<p className="poppins-light ml-4">Stock disponible</p>
                        ):(
                        <p>Sin stock</p>)
                    }
                </div>
                
            </div>
            
        </div> 
    );
}
 
export default ProductDetail;