import ProductCard from './ProductCard';

const CategorySection = ({ title, products }) => {
  const prices = [200, 250, 300, 350, 400];

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-semibold text-blue-700 mb-4">{title}</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {products.map((product, index) => (
          <ProductCard
            key={product.id}
            title={product.name}
            image={product.image}
            price={prices[index % prices.length]} 
            onAddToCart={() => console.log(`Added ${product.name} to cart`)}
          />
        ))}
      </div>
    </div>
  );
};

export default CategorySection;