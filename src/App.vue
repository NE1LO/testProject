<template>
  <Header />
  <container>
    <div class="flex items-start gap-[32px]">
      <Sidebar />
      <router-view> </router-view>
    </div>
  </container>
</template>

<script>
import Header from "./Layouts/Header.vue";
import Sidebar from "./Layouts/Sidebar.vue";
export default {
  name: "App",
  components: {
    Sidebar,
    Header,
  },
};
</script>

<style></style>
