import useFetchProductById from "../../../hooks/product/useFetchProductById";
import ProductDetailList from "./ProductDetailList";
import { Spinner } from "flowbite-react";

const ProductDetailContainer = () => {
    const { product, error, loading } = useFetchProductById();

    if (loading) {
        return (
            <div className="bottom-1/2 flex justify-center items-center h-80">
                <Spinner size="lg" />
            </div>
        );
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!product) {
        return <div>No se encontró el producto</div>;
    }

    return (
        <div className="">
            <ProductDetailList product={product} />
        </div>
    );
};

export default ProductDetailContainer;
