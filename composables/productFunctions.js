export const fetchProducts = async () => {
  return await useFetch(() => `https://products-api.om.ge/api/products`)
}