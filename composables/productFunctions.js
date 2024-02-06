export const fetchProducts = async () => {
  const runtimeConfig = useRuntimeConfig();
  const token = fetchToken();
  console.log(token);
  const { data, error } = await useFetch(
    `${runtimeConfig.public.API_URL_PRODUCTS}/products`,{
      headers:{
        token:token
      },
      params:{
        orderByDesc: true
      }
    }
  );

  if (error.value) {
    throw createError({
      ...error.value,
      statusMessage: `Could not fetch lesson `,
    });
  }

  return data;
};