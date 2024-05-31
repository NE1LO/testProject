<template>
  <ul class="w-full">
    <li class="w-full rounded-2xl bg-white p-6 flex justify-between">
      <div class="order-details flex flex-col gap-6">
        <h3 class="font-bold text-lg">Číslo objednávky: 2200245834</h3>
        <div class="order-info flex flex-col">
          <p>Datum objednávky: 6. 12. 2022</p>
          <p>Cena celkem: 1 500 Kč</p>
        </div>
        <div class="order-buttons flex gap-2">
          <button
            class="text-white bg-blue-500 px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-200"
          >
            Detail
          </button>
          <button class="btn-repeat text-black px-6 py-3">Zopakovat</button>
        </div>
      </div>
      <div class="order-status flex flex-col items-end gap-2">
        <p class="status text-xs text-green-600">Zaplaceno</p>
        <a class="order-help-link text-blue-500" href="#"
          >Potřebujete poradit?</a
        >
        <a class="order-contacts text-gray-800" href="tel:+1234567890">
          123 456 7890 (po-pá 8:00-16:00)
        </a>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  name: "OrdersItem",
};
</script>

<style scoped></style>
