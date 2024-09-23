// Server Component
import ProductAPIService from '@/app/services/api/product-api-service';
import HeaderCategories from '@/app/components/header-categories';

const Header = async () => {
  const categories: [] = await ProductAPIService.getCategories();

  return (
    <header className="bg-gray-800 text-white">
      <nav className="container mx-auto p-4">
        <HeaderCategories categories={categories} />
      </nav>
    </header>
  );
};

export default Header;
