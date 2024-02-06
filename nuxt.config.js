// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig: {
    ADMIN_USER : process.env.ADMIN_USER,
    ADMIN_PASSWORD : process.env.ADMIN_PASSWORD,
    public: {
      API_URL_USERS : process.env.API_URL_USERS,
      API_URL_PRODUCTS : process.env.API_URL_PRODUCTS,
      API_URL_CONTENTS : process.env.API_URL_CONTENTS,
      API_URL_ORDERS : process.env.API_URL_ORDERS,
    }
  }

})
