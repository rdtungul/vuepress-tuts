<template>
  <p class="demo">
    {{ title }}
    {{ msg }}
  </p>
</template>

<script>
export default {
  data() {
    return {
      title: "Hello",
      msg: "Hello this is <demo-component>",
    };
  },
};
</script>
