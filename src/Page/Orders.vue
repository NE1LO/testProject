<template>
  <div class="w-full">
    <ul class="w-full flex flex-col gap-[24px]">
      <li>
        <OrdersItem />
      </li>
      <li>
        <OrdersItem />
      </li>
      <li>
        <OrdersItem />
      </li>
    </ul>
  </div>
</template>

<script>
import OrdersItem from "../components/OrdersItem.vue";
export default {
  name: "orders",
  components: {
    OrdersItem,
  },
};
</script>

<style></style>
