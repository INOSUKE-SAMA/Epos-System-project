const ProductCard = ({ title, image, price, onAddToCart }) => {
  return (
    <div className="border rounded-lg shadow-md p-2 hover:shadow-xl transition-shadow flex flex-col justify-between">
      <div>
        <img
          src={image}
          alt={title}
          className="w-full h-24 object-cover rounded-md mb-2"
        />
        <h3 className="text-md font-semibold mt-2">{title}</h3>
        {price && (
          <p className="text-blue-700 font-bold mt-2">₹{price.toFixed(2)}</p>
        )}
      </div>
      <div className="mt-2 text-center">
        <button
          onClick={onAddToCart}
          className="bg-blue-600 text-white py-1 px-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
