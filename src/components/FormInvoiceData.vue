<template>
  <form @submit.prevent="submitForm">
    <div class="flex gap-[12px]">
      <div class="flex flex-col gap-[12px] w-full">
        <InputLabel
          inputId="companyName"
          labelText="Název firmy"
          inputType="text"
        />
        <InputLabel inputId="city" labelText="Město" inputType="text" />
        <InputLabel inputId="ic" labelText="IČ" inputType="text" />
        <InputLabel inputId="firstName" labelText="Jméno" inputType="name" />
        <InputLabel inputId="phone" labelText="Telefon" inputType="tel" />
      </div>
      <div class="flex flex-col gap-[12px] w-full">
        <InputLabel inputId="street" labelText="Ulice" inputType="text" />
        <InputLabel inputId="zipcode" labelText="PSČ" inputType="text" />
        <InputLabel inputId="vat" labelText="DIČ" inputType="text" />
        <InputLabel inputId="lastName" labelText="Příjmení" inputType="text" />
        <InputLabel inputId="email" labelText="Email" inputType="email" />
      </div>
    </div>
  </form>
</template>

<script>
import InputLabel from "./InputLabel.vue";

export default {
  name: "FormInvoiceData",
  components: {
    InputLabel,
  },
};
</script>

<style></style>
