// Server Component
import ProductAPIService from '@/app/services/api/product-api-service';

const Header = async () => {
  const categories = await ProductAPIService.getCategories();

  return (
    <header className="bg-gray-800 text-white">
      <nav className="container mx-auto p-4">
        <ul className="flex space-x-4">
          {categories.map((category: string) => (
            <li key={category} className="relative group">
              <span className="cursor-pointer">{category}</span>
              {/* Add dropdown or other elements as needed */}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
