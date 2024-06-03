<template>
  <div class="w-full bg-white px-[24px] py-[24px]">
    <table class="min-w-full">
      <thead>
        <tr>
          <th
            class="text-left leading-4 text-gray-800 tracking-wider text-[12px] lg:text-[16px]"
          >
            Číslo faktury
          </th>
          <th
            class="text-left leading-4 text-gray-800 tracking-wider text-[12px] lg:text-[16px]"
          >
            Číslo objednávky
          </th>
          <th
            class="text-left leading-4 text-gray-800 tracking-wider text-[12px] lg:text-[16px]"
          >
            Cena celkem
          </th>
          <th class="text-left leading-4 text-gray-800"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(invoice, index) in invoices" :key="index">
          <td
            class="invoice-text pt-[38px] text-[8px] sm:text-[12px] lg:text-[16px] whitespace-nowrap"
          >
            {{ invoice.invoiceNumber }}
          </td>
          <td
            class="invoice-text pt-[38px] text-[8px] sm:text-[12px] lg:text-[16px] whitespace-nowrap"
          >
            {{ invoice.orderNumber }}
          </td>
          <td
            class="invoice-text pt-[38px] text-[8px] sm:text-[12px] lg:text-[16px] whitespace-nowrap"
          >
            {{ invoice.totalPrice }}
          </td>
          <td class="invoice-text pt-[38px] flex justify-center items-center">
            <a
              class="flex items-center invoice-download-link text-[10px] sm:text-[14px] lg:text-[16px]"
              href=""
            >
              <svg class="inline-block w-4 h-4 mr-1" width="16" height="16">
                <use href="../icons/icons.svg#icon-download"></use></svg
              >Stáhnout
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "invoice",
  data() {
    return {
      invoices: [
        {
          invoiceNumber: "121548784515487",
          orderNumber: "121548784515487",
          totalPrice: "-1500 Kč",
        },
        {
          invoiceNumber: "121548784515487",
          orderNumber: "121548784515487",
          totalPrice: "-1500 Kč",
        },
        {
          invoiceNumber: "121548784515487",
          orderNumber: "121548784515487",
          totalPrice: "-1500 Kč",
        },
        {
          invoiceNumber: "121548784515487",
          orderNumber: "121548784515487",
          totalPrice: "-1500 Kč",
        },
        {
          invoiceNumber: "121548784515487",
          orderNumber: "121548784515487",
          totalPrice: "-1500 Kč",
        },
        {
          invoiceNumber: "121548784515487",
          orderNumber: "121548784515487",
          totalPrice: "-1500 Kč",
        },
        {
          invoiceNumber: "121548784515487",
          orderNumber: "121548784515487",
          totalPrice: "-1500 Kč",
        },
        {
          invoiceNumber: "121548784515487",
          orderNumber: "121548784515487",
          totalPrice: "-1500 Kč",
        },
        {
          invoiceNumber: "121548784515487",
          orderNumber: "121548784515487",
          totalPrice: "-1500 Kč",
        },
      ],
    };
  },
  components: {},
};
</script>

<style>
.invoice-text {
  color: rgb(115, 115, 115);
  word-wrap: break-word;
}

.invoice-download-link {
  color: rgb(59, 130, 246);
}
</style>
