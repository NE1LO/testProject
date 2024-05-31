<template>
  <form @submit.prevent="submitForm">
    <div class="flex gap-[12px]">
      <div class="flex flex-col gap-[12px] w-full">
        <InputLabel inputId="userName" labelText="Jméno" :inputType="'name'" />
        <InputLabel
          inputId="userEmail"
          labelText="Email"
          :inputType="'email'"
        />
      </div>
      <div class="flex flex-col gap-[12px] w-full">
        <InputLabel
          inputId="userLastName"
          labelText="Příjmení"
          :inputType="'text'"
        />
        <InputLabel
          inputId="userPhoneNumber"
          labelText="Jméno"
          :Telefon="'tel'"
        />
      </div>
    </div>
  </form>
</template>

<script>
import InputLabel from "./InputLabel.vue";
export default {
  name: "FormContacts",
  components: {
    InputLabel,
  },
};
</script>

<style></style>
