const getCategories = async () => {
  const response = await fetch('https://fakestoreapi.com/products/categories');
  return response.json();
};

const ProductAPIService = {
  getCategories: getCategories,
};

export default ProductAPIService;
