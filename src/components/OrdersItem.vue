<template>
  <ul class="w-full">
    <li class="w-full rounded-2xl bg-white p-6 flex justify-between">
      <div class="order-details flex flex-col gap-6">
        <h3 class="font-bold text-lg">Číslo objednávky: 2200245834</h3>
        <div class="order-info flex flex-col">
          <p class="text-[14px] lg:text-[16px]">
            Datum objednávky: 6. 12. 2022
          </p>
          <p class="text-[14px] lg:text-[16px]">Cena celkem: 1 500 Kč</p>
        </div>
        <div class="flex gap-2">
          <button
            class="text-[14px] lg:text-[16px] text-white bg-blue-500 px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-200"
          >
            Detail
          </button>
          <button
            class="text-[14px] lg:text-[16px] btn-repeat text-black px-[10px] py-[10px] lg:px-6 lg:py-3 flex items-center gap-[10px]"
          >
            Zopakovat
            <svg class="icon mr-[12px] inline-block" width="16" height="16">
              <use href="../icons/icons.svg#icon-left"></use>
            </svg>
          </button>
        </div>
      </div>
      <div class="flex flex-col items-end gap-2">
        <p class="status text-[14px] lg:text-[16px] text-xs text-green-600">
          Zaplaceno
        </p>
        <a class="text-[14px] lg:text-[16px] text-blue-500" href="#"
          >Potřebujete poradit?
        </a>
        <a
          class="text-gray-800 text-[14px] lg:text-[16px]"
          href="tel:+1234567890"
        >
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
