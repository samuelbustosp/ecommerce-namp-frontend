
import Breadcrumb from "../Breadcrumb";
import ProductList from "../product/ProductList";

const SubcategoryDetailList = ({products, subcategory}) => {
    const totalProducts = products.length

    const paths = [
        { name: "Inicio", to: '/home' },
        { 
            name: subcategory.idCategory.name.charAt(0).toUpperCase() + subcategory.idCategory.name.slice(1).toLowerCase(),
            to: `/categoria/${subcategory.idCategory.name.toLowerCase()}`
        },
        { 
            name: subcategory.name.charAt(0).toUpperCase() + subcategory.name.slice(1).toLowerCase(),
            to: `/subcategoria/${subcategory.name.toLowerCase()}`
        }
    ];
    
    return (
        <div className="flex min-h-screen gap-2 mt-4">
            <div className="w-1/6 pl-8">
                <div className="w-full mb-4 ml-2"> 
                    <Breadcrumb paths={paths} />
                </div>
                <div className="mb-6 ml-2">
                    <h1 className="poppins-bold text-2xl ">{subcategory.idCategory.name}</h1>
                    <h2 className="poppins-regular text-xl ">{subcategory.name}</h2>
                    <p className="poppins-light text-sm">{totalProducts} resultados</p>
                </div>  
            </div>
            
            <div className="w-4/5 items-center justify-center container">
                <ProductList products={products} />
            </div>
        </div>
    );
}
 
export default SubcategoryDetailList;
