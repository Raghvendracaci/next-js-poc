'use client';

import { useRouter } from 'next/navigation';

const HeaderCategories = ({ categories }: { categories: [] }) => {
  const router = useRouter();
  const goToCategoryPage = (category: string) => {
    router.push(`/products/category/${category}`);
  };

  return (
    <ul className="flex space-x-4">
      {categories.map((category: string) => (
        <li
          key={category}
          className="relative group"
          onClick={() => goToCategoryPage(category)}
        >
          <span className="cursor-pointer">{category}</span>
        </li>
      ))}
    </ul>
  );
};

export default HeaderCategories;
