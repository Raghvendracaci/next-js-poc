'use client';

import { truncateText } from '@/app/libs/utils';
import { Product } from '@/app/types/Product';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const ProductGrid = ({ products }: { products: Product[] }) => {
  const router = useRouter();
  const goToProductPage = (id: number) => {
    router.push(`/products/${id}`);
  };
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {products.map((product: Product) => (
          <div
            key={product.id}
            className="border rounded-lg overflow-hidden shadow-lg cursor-pointer"
            onClick={() => goToProductPage(product.id)}
          >
            <Image
              src={product.image}
              alt={product.title}
              width={300}
              height={300}
              className="w-full h-48 object-contain"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{product.title}</h2>
              <p className="text-gray-600">{product.category}</p>
              <p className="text-lg font-bold">{product.price}</p>
              <p className="text-gray-500">
                {truncateText(product.description)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
