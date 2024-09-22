import useFetchCategory from "../../hooks/useFetchCategory";
import { Spinner, Button } from "flowbite-react";
import { useState } from "react";
import { GrNext, GrPrevious } from "react-icons/gr";
import { PiWineFill } from "react-icons/pi";
import { Link } from "react-router-dom";

const CategoryCarousel = () => {
    const { categories, error, loading } = useFetchCategory();
    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsPerPage = 4;

    if (loading) {
        return (
            <div className="flex justify-center items-center h-80">
                <Spinner size="lg" />
            </div>
        );
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    const handleNext = () => {
        if (currentIndex < categories.length - 1) {
            setCurrentIndex((prev) => Math.min(prev + 1, categories.length - itemsPerPage));
        }
    };

    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex((prev) => Math.max(prev - 1, 0));
        }
    };

    const formatCategoryName = (name) => {
        const words = name.split(' ');
        return words.length > 1 ? `${words[0]}\n${words.slice(1).join(' ')}` : name;
    };

    return (
        <div className="my-20">
            <div className="flex items-center justify-center mb-8">
                <h1 className="poppins-bold text-4xl">Categorías</h1>
            </div>
            
            <div className="flex items-center justify-center">
                <button className="rounded-full border border-gray-400 p-2.5" onClick={handlePrev} disabled={currentIndex === 0}>
                    <GrPrevious/>
                </button>
                <div className="flex">
                    {categories.slice(currentIndex, currentIndex + itemsPerPage).map((category) => (
                        <Link to={`/categoria/${category.name.toLowerCase()}`} key={category.idCategory} className="flex flex-col items-center mx-10 hover:opacity-90">
                            <div className="flex-none w-24 h-24 bg-blue-800 rounded-full shadow-lg flex items-center justify-center">
                                <span className="text-4xl text-white"><PiWineFill/></span>
                            </div>
                            <p className="text-center text-md font-semibold mt-2 whitespace-pre-line leading-4">
                                {formatCategoryName(category.name)}
                            </p>
                        </Link>
                    ))}
                </div>
                <button className="rounded-full border border-gray-400 p-2.5" onClick={handleNext} disabled={currentIndex + itemsPerPage >= categories.length}>
                    <GrNext/>
                </button>
            </div>
        </div>
    );
};

export default CategoryCarousel;
