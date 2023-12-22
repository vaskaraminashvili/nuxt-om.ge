export default defineNuxtPlugin(nuxtApp => {
  return {
    provide: {
       hello: () => {
        const {category} = $fetch(`${useRuntimeConfig().public.config.API_URL_PRODUCTS}/categories/tree`,{
        })
      }
    }
  }
})