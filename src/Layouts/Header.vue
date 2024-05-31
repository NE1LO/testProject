<template>
  <header class="w-full py-[32px]">
    <container>
      <div class="w-full flex justify-between">
        <h1 class="title text-[32px] font-[600]">{{ pageTitle }}</h1>
        <button class="block md:hidden" @click="sidebarOpen" type="button">
          <v-icon name="co-hamburger-menu" class="w-[30px] h-[30px]" />
        </button>
      </div>
    </container>
  </header>
</template>

<script>
export default {
  name: "Header",
  computed: {
    pageTitle() {
      return this.$route.meta.title || "Default Title";
    },
  },
  methods: {
    sidebarOpen() {
      const sidebar = document.getElementById("sidebar");
      if (sidebar) {
        sidebar.classList.remove("sidebar-hidden");
      }
    },
  },
};
</script>

<style></style>
