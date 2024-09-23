import { Product } from '@/app/types/Product';
import Image from 'next/image';

const ProductDetail = async ({ product }: { product: Product }) => {
  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2">
          <Image
            src={product.image}
            alt={product.title}
            width={500}
            height={500}
            className="h-auto mb-4"
          />
        </div>
        <div className="md:w-1/2 md:pl-4">
          <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
          <p className="text-lg font-bold">{product.price}</p>
          <p className="text-gray-600 mb-4">{product.category}</p>
          <p className="text-gray-500">{product.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
