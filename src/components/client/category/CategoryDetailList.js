import SubcategoryDetail from "../subcategory/SubcategoryDetail";

const CategoryDetailList = ({subcategories}) => {
    return ( 
        <div className="">
            <SubcategoryDetail subcategories={subcategories}/>
        </div>
     );
}
 
export default CategoryDetailList;