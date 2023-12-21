<template>
  <div>
    tasdas dasd s
  </div>
</template>

<script>
export default {
  mounted() {
    const { $hello } = useNuxtApp()
    console.log($hello('test'));
  },
  data() {
    return {
      slides: null,
      config: useRuntimeConfig().public.config
    }
  },
  methods: {

  },
}
</script>

<style lang="scss" scoped></style>