const ClientProduct = ({idProduct, name, description, price, stock, img}) => {
    return ( 
        <article className="flex flex-col bg-white p-4 border border-gray-300 mb-4 w-full h-80">
            <div className="mb-2">
                
                <img src={`http://localhost:8080${img}`} alt={name} className="w-full h-48 object-contain rounded-lg zoomable-image" />
               
            </div>
            <div className="flex-grow">
                <header className="mb-2">
                    <h2 className="text-md font-semibold">{name}</h2>
                </header>
                <section className="mb-2">
                    <p className="text-gray-600 text-sm font-semibold">${price}</p>
                    {stock > 0 ? (
                        <p className="text-gray-600 text-sm">Unidades disponibles: {stock}</p>
                    ) : (
                        <p className="text-green-800 text-sm font-semibold">No hay stock disponible</p>
                    )}
                </section>
                <footer>
                    
                </footer>
            </div>
        </article>
     );
}
 
export default ClientProduct;