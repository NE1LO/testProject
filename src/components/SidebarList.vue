<template>
  <nav>
    <ul
      class="flex flex-col items-center md:items-start justify-center px-[24px] py-[24px] gap-2 list-none p-0"
    >
      <li>
        <router-link
          @click="handleLinkClick"
          class="list-item-link px-[16px] py-[16px] h-[54px] rounded-[4px] flex items-center w-[220px] no-underline p-4 font-inter text-sm font-semibold"
          :to="{ name: 'Orders' }"
        >
          <svg class="icon mr-[12px]" width="16" height="16">
            <use href="../icons/symbol-defs.svg#icon-vector-file"></use>
          </svg>
          Moje objednávky
          <svg class="ml-auto" width="6" height="10">
            <use href="../icons/symbol-defs.svg#icon-rigth"></use></svg
        ></router-link>
      </li>
      <li>
        <router-link
          @click="handleLinkClick"
          class="list-item-link h-[54px] rounded-[4px] list-item-link px-[16px] py-[16px] h-[54px] rounded-[4px] flex items-center w-[220px] no-underline p-4 font-inter text-sm font-semibold"
          :to="{ name: 'Invoice' }"
          ><svg class="icon mr-[12px]" width="16" height="16">
            <use href="../icons/icons.svg#icon-file-done"></use></svg
          >Faktury
          <svg class="ml-auto" width="6" height="10">
            <use href="../icons/symbol-defs.svg#icon-rigth"></use></svg
        ></router-link>
      </li>
      <li>
        <a
          class="list-item-link pointer-events-none h-[54px] rounded-[4px] list-item-link px-[16px] py-[16px] h-[54px] rounded-[4px] flex items-center w-[220px] no-underline p-4 font-inter text-sm font-semibold"
          href="#"
          ><svg class="icon mr-[12px]" width="16" height="16">
            <use href="../icons/icons.svg#icon-heart"></use>
          </svg>
          Seznam přání
          <svg class="ml-auto" width="6" height="10">
            <use href="../icons/symbol-defs.svg#icon-rigth"></use></svg
        ></a>
      </li>
      <li>
        <a
          class="list-item-link pointer-events-none h-[54px] rounded-[4px] list-item-link px-[16px] py-[16px] h-[54px] rounded-[4px] flex items-center w-[220px] no-underline p-4 font-inter text-sm font-semibold"
          href="#"
        >
          <svg class="icon mr-[12px]" width="16" height="16">
            <use href="../icons/icons.svg#icon-heart"></use></svg
          >Slevové kódy
          <svg class="ml-auto" width="6" height="10">
            <use href="../icons/symbol-defs.svg#icon-rigth"></use></svg
        ></a>
      </li>
      <li>
        <a
          class="list-item-link pointer-events-none h-[54px] rounded-[4px]list-item-link px-[16px] py-[16px] h-[54px] rounded-[4px] flex items-center w-[220px] no-underline p-4 font-inter text-sm font-semibold"
          href="#"
        >
          <svg class="icon mr-[12px]" width="16" height="16">
            <use href="../icons/icons.svg#icon-heart"></use></svg
          >Věrnostní program
          <svg class="ml-auto" width="6" height="10">
            <use href="../icons/symbol-defs.svg#icon-rigth"></use></svg
        ></a>
      </li>
      <li>
        <router-link
          @click="handleLinkClick"
          class="list-item-link h-[54px] rounded-[4px]list-item-link px-[16px] py-[16px] h-[54px] rounded-[4px] flex items-center w-[220px] no-underline p-4 font-inter text-sm font-semibold"
          :to="{ name: 'Setting' }"
        >
          <svg class="icon mr-[12px]" width="16" height="16">
            <use href="../icons/icons.svg#icon-setting"></use></svg
          >Nastavení účtu
          <svg class="ml-auto" width="6" height="10">
            <use href="../icons/symbol-defs.svg#icon-rigth"></use></svg
        ></router-link>
      </li>

      <li>
        <button
          @click="handleLinkClick"
          class="mr-auto pt-[32px] flex gap-[10px] text-[14px] font-medium transition duration-200 hover:text-red-500"
        >
          <svg class="ml-auto" width="16" height="16">
            <use href="../icons/symbol-defs.svg#icon-exit"></use>
          </svg>
          Odhlásit se
        </button>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "SidebarList",
  methods: {
    handleLinkClick() {
      this.$emit("linkClicked");
    },
  },
};
</script>

<style>
.list-item-link {
  transition: background-color 0.1s;
  background-color: rgb(243, 244, 246);
}

.list-item-link:hover {
  background-color: #e2e6ea;
}

.icon {
  stroke: black;
  fill: transparent;
}

.pointer-events-none {
  pointer-events: none;
}
</style>

<!-- flex flex-col justify-center px-[24px] py-[24px] items-center gap-2 list-none p-0 -->
