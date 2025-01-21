const ProductCard = ({ title, image }) => {
  return (
    <div className="border rounded-lg shadow-md p-4 hover:shadow-xl transition-shadow">
      <img
        src={image}
        alt={title}
        className="w-full h-32 object-cover rounded-md mb-4"
      />
      <h3 className="text-lg font-semibold mt-2">{title}</h3>
      <div className="mt-2 text-center">
       
      </div>
    </div>
  );
};

export default ProductCard;
