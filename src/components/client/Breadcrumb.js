import { GrFormNext } from "react-icons/gr";
import { Link } from "react-router-dom";

const Breadcrumb = ({ paths }) => {
    return (
        <nav className="flex items-center mx-0.5 poppins-light text-sm mb-2">
            {paths.map((path, index) => (
                <Link to={path.to} key={index} className="flex items-center whitespace-nowrap">
                    <span className="hover:text-blue-800">{path.name}</span>
                    {index < paths.length - 1 && (
                        <span className="mx-0 flex items-center">
                            <GrFormNext />
                        </span>
                    )}
                </Link>
            ))}
        </nav>
    );
};

export default Breadcrumb;
