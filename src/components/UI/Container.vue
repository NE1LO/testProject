<template>
  <div class="my-container">
    <slot />
  </div>
</template>

<script>
export default {
  name: "container",
};
</script>

<style>
.my-container {
  margin: 0 auto;
  padding: 0 64px;
}
</style>
