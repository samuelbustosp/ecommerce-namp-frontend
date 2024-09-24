import { useEffect, useMemo } from "react";
import { useState } from "react";
import CategoryMenuList from "./CategoryMenuList";
import { Spinner } from "flowbite-react";
import useFetchCategory from "../../../hooks/category/useFetchCategory";

const CategoryMenu = ({isMenuOpen}) => {
    const { categories, error, loading } = useFetchCategory();
    

    const sortedCategories = useMemo(() => 
        categories
            .sort((a, b) => a.name.localeCompare(b.name)) 
    , [categories]);

    if (!isMenuOpen) return null;

    if (loading) {
        return (
            <div className="bottom-1/2 flex justify-center items-center h-80">
                <Spinner size="lg" />
            </div>
        )
    }

    return (  
        <div>
            <CategoryMenuList categories={sortedCategories}/>
        </div>
    );
}
 
export default CategoryMenu;