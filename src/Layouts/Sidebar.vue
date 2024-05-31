<template>
  <div class="bg-white flex flex-col h-[100%] rounded-[16px]">
    <UserProfile />
    <SidebarList />
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
};
</script>

<style
</style>
