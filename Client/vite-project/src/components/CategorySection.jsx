import ProductCard from './ProductCard';

const CategorySection = ({ title, products }) => {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-semibold text-blue-700 mb-4">{title}</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        
      </div>
    </div>
  );
};

export default CategorySection;
