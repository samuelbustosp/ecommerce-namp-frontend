import { Spinner } from "flowbite-react";
import useFetchSubcategoryById from "../../../hooks/subcategory/useFetchSubcategoryById";
import SubcategoryDetailList from "./SubcategoryDetailList";

const SubcategoryDetailContainer = () => {
    const  {subcategory,products,error,loading} = useFetchSubcategoryById();

    if (loading) {
        return (
            <div className="bottom-1/2 flex justify-center items-center h-80">
                <Spinner size="lg" />
            </div>
        );
    }

    return (
        <div>
            <SubcategoryDetailList products={products} subcategory={subcategory}/>
        </div>
    );
}
 
export default SubcategoryDetailContainer;