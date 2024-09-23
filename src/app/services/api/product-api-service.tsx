import {
  CATEGORIES,
  CATEGORY_PRODUCTS,
  PRODUCTS,
} from '@/app/libs/api-endpoints';

const getCategories = async () => {
  const response = await fetch(process.env.API_BASE_URL + CATEGORIES);
  return response.json();
};

const getCategoryProducts = async (category: string) => {
  const response = await fetch(
    process.env.API_BASE_URL + CATEGORY_PRODUCTS + category
  );
  return response.json();
};

const getProduct = async (id: number) => {
  const response = await fetch(process.env.API_BASE_URL + PRODUCTS + '/' + id);
  return response.json();
};

const ProductAPIService = {
  getCategories: getCategories,
  getCategoryProducts: getCategoryProducts,
  getProduct: getProduct,
};

export default ProductAPIService;
