<template>
  <div id="global-layout">
    <header><h1>Header</h1></header>
    <component :is="layout" />
    <Footer />
  </div>
</template>

<script>
export default {
  computed: {
    layout() {
      if (this.$page.path) {
        if (this.$frontmatter.layout) {
          return this.$frontmatter.layout;
        }
        return "Layout";
      }
      return "NotFound";
    },
  },
};
</script>
