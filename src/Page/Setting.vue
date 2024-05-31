<template>
  <div class="w-full bg-white px-[24px] py-[24px] rounded-[12px]">
    <h2 class="text-[20px] font-[600] pb-[32px]">Kontaktní údaje</h2>
    <FormContacts />
    <h2 class="text-[20px] font-[600] pb-[44px] pt-[32px]">Fakturační údaje</h2>
    <FormInvoiceData />
    <button
      class="setting-btn mt-[32px] px-[24px] py-[12px] text-[#ffff] rounded-[8px] transition-colors duration-300"
      type="submit"
    >
      Uložit změny
    </button>
  </div>
</template>

<script>
import FormContacts from "../components/FormContacts.vue";
import FormInvoiceData from "../components/FormInvoiceData.vue";
export default {
  components: {
    FormContacts,
    FormInvoiceData,
  },
};
</script>

<style>
.setting-btn {
  background: rgb(59, 130, 246);
}

.setting-btn:hover,
.setting-btn:focus {
  background: rgb(29, 115, 255);
}
</style>
