import { useEffect, useState } from "react";
import { Spinner } from "flowbite-react";
import { useParams } from "react-router-dom";
import SubcategoryDetail from "../subcategory/SubcategoryDetail";
import useFetchCategoryById from "../../../hooks/category/useFetchCateogryById";


const CategoryDetailContainer = () => {
    const { category, subcategories, error, loading } = useFetchCategoryById();

    if (loading) {
        return (
            <div className="bottom-1/2 flex justify-center items-center h-80">
                <Spinner size="lg" />
            </div>
        )
    }
    
    return (  
        <div className="">
            <SubcategoryDetail subcategories={subcategories} category={category}/>
        </div>
    );
}
 
export default CategoryDetailContainer;