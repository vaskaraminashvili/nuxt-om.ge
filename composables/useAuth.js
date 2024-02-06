export const fetchToken = async () => {
  const runtimeConfig = useRuntimeConfig();
  const { data, error } = await useFetch(
    `${runtimeConfig.public.API_URL_USERS}/auth/login`, {
    method: 'post',
    body: {
      identifier: runtimeConfig.public.ADMIN_USER,
      password: runtimeConfig.public.ADMIN_PASSWORD,
    },
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