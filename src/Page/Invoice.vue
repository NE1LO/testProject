<template>
  <div class="w-full bg-white px-[24px] py-[24px]">
    <table class="min-w-full">
      <thead>
        <tr>
          <th class="text-left leading-4 text-gray-800 tracking-wider">
            Číslo faktury
          </th>
          <th class="text-left leading-4 text-gray-800 tracking-wider">
            Číslo objednávky
          </th>
          <th class="text-left leading-4 text-gray-800 tracking-wider">
            Cena celkem
          </th>
          <th class="text-left leading-4 text-gray-800"></th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(invoice, index) in invoices"
          :key="index"
          class="hover:bg-gray-100"
        >
          <td class="invoice-text pt-[38px]">
            {{ invoice.invoiceNumber }}
          </td>
          <td class="invoice-text pt-[38px]">
            {{ invoice.orderNumber }}
          </td>
          <td class="invoice-text pt-[38px]" :class="{}">
            {{ invoice.totalPrice }}
          </td>
          <td class="invoice-text pt-[38px]">
            <a class="invoice-download-link" href="">Stáhnout</a>
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
}

.invoice-download-link {
  color: rgb(59, 130, 246);
}
</style>
