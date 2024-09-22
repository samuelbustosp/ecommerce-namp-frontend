import Banner from "../../components/client/Banner";
import ProductContainer from "../../components/client/product/ProductContainer";
import PromotionalCards from "../../components/client/PromotionalCards";

const Home = () => {
    return (
        <div className="bg-gray-100 min-h-screen">
            <div className="container">
                <PromotionalCards/>
                <Banner/>
                <ProductContainer/>
            </div>
        </div>
    );
}

export default Home;