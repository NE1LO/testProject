<template>
  <div
    id="sidebar"
    class="sidebar-block sidebar-hidden flex flex-col h-[100%] bg-white md:rounded-[16px]"
  >
    <button
      @click="closeSidebar"
      class="fixed right-[30px] top-[20px] md:hidden"
    >
      <v-icon name="io-close" class="w-[30px] h-[30px]" />
    </button>
    <UserProfile />
    <SidebarList @linkClicked="closeSidebar" />
  </div>
</template>

<script>
import UserProfile from "../components/UserProfile.vue";
import SidebarList from "../components/SidebarList.vue";
export default {
  name: "Sidebar",
  components: {
    SidebarList,
    UserProfile,
  },
  data() {
    return {};
  },
  methods: {
    closeSidebar() {
      const sidebar = document.getElementById("sidebar");
      if (sidebar) {
        sidebar.classList.add("sidebar-hidden");
      }
    },
  },
};
</script>

<style>
@media screen and (max-width: 768px) {
  .sidebar-block {
    z-index: 9999999999;
    width: 100%;
    position: fixed;
    left: 0;
    top: 0;
  }
  .sidebar-hidden {
    display: none;
    visibility: hidden;
    opacity: 0;
  }
}
</style>
