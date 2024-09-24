const ComboContainer = () => {
    const [products, setProducts] = useState([]);
    const [combos, setCombos] = useState([])
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isErrorModalOpen, setIsErrorModalOpen] = useState(false); 
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingProduct, setEditingProduct] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        const fetchProduct = async () => {
            setLoading(true);
            try {
                const response = await fetch("http://localhost:8080/api-namp/product", {
                    method: 'GET',
                    mode: 'cors' 
                });
    
                if (!response.ok) {
                    throw new Error('Error al obtener las subcategorías');
                }
    
                const data = await response.json();
    
                setProducts(data);
            } catch (error) {
                setError(error.message);
                setIsErrorModalOpen(true);
            } finally {
                setTimeout(() => {
                    setLoading(false);
                }, 800); 
            }
        };
        fetchCombos();
        fetchProduct();
    }, []);

    const fetchCombos = async () => {
        try {
            const response = await fetch("http://localhost:8080/api-namp/combo");
            if (!response.ok) {
                throw new Error('Error al obtener los combos');
            }
            const data = await response.json();
            setCombos(data);
        } catch (error) {
            setError(error.message);
            setIsErrorModalOpen(true);
        }
    };

    const addCombo = async (combo, file) => {
        setLoading(true);
        try {
            const formData = new FormData();
            formData.append('combo', JSON.stringify(combo));
            formData.append('file', file);

            const response = await fetch("http://localhost:8080/api-namp/combo", {
                method: "POST",
                body: formData
            });

            if (!response.ok) {
                const errorText = await response.text();
                throw new Error(errorText || 'Error al agregar los combos');
            }
            
            await fetchCombos();
            
            setIsModalOpen(false);
        } catch (error) {
            setError(error.message);
            setIsErrorModalOpen(true); 
        } finally {
            setLoading(false);
        }
    };

    const updateCombo = async (id, updatedProduct, file) => {
        setLoading(true);
        try {
            const formData = new FormData();
            formData.append('product', JSON.stringify(updatedProduct));
            if (file) {
                formData.append('file', file);
            }
    
            const response = await fetch(`http://localhost:8080/api-namp/product/${id}`, {
                method: "PUT",
                body: formData
            });

            if (!response.ok) {
                const errorText = await response.text();
                throw new Error(errorText || 'Error al actualizar la subcategoría');
            }

            await fetchProduct();
            setIsModalOpen(false); 
        } catch (error) {
            setError(error.message);
            setIsErrorModalOpen(true); 
        } finally {
            setLoading(false);
        }
    };

    return ( 
        <div></div>
     );
}
 
export default ComboContainer;