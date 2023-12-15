<template>
  <div>
    <p>Some default layout content shared across all pages</p>
    <slot />
  </div>
</template>
<script>
import "~/public/assets/css/theme.min.css"
import "~/public/assets/libs/feather-webfont/dist/feather-icons.css"
import "~/public/assets/libs/bootstrap-icons/font/bootstrap-icons.min.css"
import "~/public/assets/libs/feather-webfont/dist/feather-icons.css"
export default {
  name: 'DefaultLayout',
  head: {
    script: [
      { src: '@/assets/libs/bootstrap/dist/js/bootstrap.bundle.min.js', body: true, defer: true, async: true },

    ],
    link: [
      // { rel: 'stylesheet', type: 'text/css', href: '~/assets/css/theme.min.css' },
      // { rel: 'stylesheet', type: 'text/css', href: '~/assets/libs/bootstrap-icons/font/bootstrap-icons.min.css' },
      // { rel: 'stylesheet', type: 'text/css', href: '~/assets/libs/feather-webfont/dist/feather-icons.css' },
      // { rel: 'stylesheet', type: 'text/css', href: '~/assets/libs/simplebar/dist/simplebar.min.css' },
    ]
  },
}
</script>