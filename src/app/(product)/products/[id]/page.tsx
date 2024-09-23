import ProductDetail from '@/app/components/product/product';
import ProductAPIService from '@/app/services/api/product-api-service';

const Page = async ({ params }: { params: { id: number } }) => {
  const product = await ProductAPIService.getProduct(params.id);

  return <ProductDetail product={product} />;
};
export default Page;
