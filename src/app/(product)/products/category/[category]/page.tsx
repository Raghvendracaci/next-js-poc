import ProductGrid from '@/app/components/product/products-grid';
import ProductAPIService from '@/app/services/api/product-api-service';
import { Product } from '@/app/types/Product';

const Page = async ({ params }: { params: { category: string } }) => {
  const products: Product[] = await ProductAPIService.getCategoryProducts(
    params.category
  );

  return <ProductGrid products={products} />;
};
export default Page;
