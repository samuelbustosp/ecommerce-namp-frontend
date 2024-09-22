import ProductList from "../product/ProductList";
import Breadcrumb from "../Breadcrumb"

const SubcategoryDetail = ({ subcategories , category}) => {
    const allProducts = subcategories.flatMap(subcategory => subcategory.products);
    const totalProducts = allProducts.length
    
    const paths = [
        { name: "Inicio", to:'/home' },
        { name: category.name.charAt(0).toUpperCase() + category.name.slice(1).toLowerCase() }, `/category/${category.name.toLowerCase()}`
    ];

    console.log(subcategories);
    return (
        <div className="flex min-h-screen gap-2 mt-4">
            <div className="w-1/6 pl-8">
                <div className="w-full mb-4 ml-2"> 
                    <Breadcrumb paths={paths} />
                </div>
                <div className="mb-6 ml-2">
                    <h1 className="font-semibold poppins-bold text-2xl ">{category.name}</h1>
                    <p className="poppins-light text-sm">{totalProducts} resultados</p>
                </div>  
                <ol className="bg-white py-4 px-2 rounded-xl border shadow-lg ">
                    <h2 className="poppins-semibold text-blue-950 text-lg ml-2">Categorías</h2>
                    {subcategories.map((subcategory) => (
                        <li key={subcategory.idSubcategory} className="leading-5 ml-2 flex items-center poppins-regular">
                            {subcategory.name.charAt(0).toUpperCase() 
                            + subcategory.name.slice(1).toLowerCase()} 
                            <p className="poppins-light text-gray-900 text-sm">({subcategory.products.length})</p>    
                        </li>
                    ))}
                </ol>
            </div>
            
            <div className="w-4/5 items-center justify-center container">
                <ProductList products={allProducts} />
            </div>
        </div>
    );
    
};

export default SubcategoryDetail;
