<template>
  <div class="w-full bg-white px-[24px] py-[24px] rounded-[12px]">
    <h2 class="text-[20px] font-[600] pb-[32px]">Kontaktní údaje</h2>
    <form @submit.prevent="validateForm">
      <div class="flex gap-[12px]">
        <div class="flex flex-col gap-[12px] w-full">
          <InputLabel
            inputId="userName"
            labelText="Jméno"
            :inputType="'name'"
            v-model="formData.userName"
          />
          <InputLabel
            inputId="userEmail"
            labelText="Email"
            :inputType="'email'"
            v-model="formData.userEmail"
          />
        </div>
        <div class="flex flex-col gap-[12px] w-full">
          <InputLabel
            inputId="userLastName"
            labelText="Příjmení"
            :inputType="'text'"
            v-model="formData.userLastName"
          />
          <InputLabel
            inputId="userPhoneNumber"
            labelText="Telefon"
            :inputType="'tel'"
            v-model="formData.userPhoneNumber"
          />
        </div>
      </div>
      <h2 class="text-[20px] font-[600] pb-[44px] pt-[32px]">
        Fakturační údaje
      </h2>
      <div class="flex gap-[12px]">
        <div class="flex flex-col gap-[12px] w-full">
          <InputLabel
            inputId="companyName"
            labelText="Název firmy"
            inputType="text"
            v-model="formData.companyName"
          />
          <InputLabel
            inputId="city"
            labelText="Město"
            inputType="text"
            v-model="formData.city"
          />
          <InputLabel
            inputId="ic"
            labelText="IČ"
            inputType="text"
            v-model="formData.ic"
          />
          <InputLabel
            inputId="firstName"
            labelText="Jméno"
            inputType="name"
            v-model="formData.firstName"
          />
          <InputLabel
            inputId="phone"
            labelText="Telefon"
            inputType="tel"
            v-model="formData.phone"
          />
        </div>
        <div class="flex flex-col gap-[12px] w-full">
          <InputLabel
            inputId="street"
            labelText="Ulice"
            inputType="text"
            v-model="formData.street"
          />
          <InputLabel
            inputId="zipcode"
            labelText="PSČ"
            inputType="text"
            v-model="formData.zipcode"
          />
          <InputLabel
            inputId="vat"
            labelText="DIČ"
            inputType="text"
            v-model="formData.vat"
          />
          <InputLabel
            inputId="lastName"
            labelText="Příjmení"
            inputType="text"
            v-model="formData.lastName"
          />
          <InputLabel
            inputId="email"
            labelText="Email"
            inputType="email"
            v-model="formData.email"
          />
        </div>
      </div>
      <button
        class="setting-btn mt-[32px] px-[24px] py-[12px] text-[#ffff] rounded-[8px] transition-colors duration-300"
        type="submit"
      >
        Uložit změny
      </button>
      <div v-if="errorMessage" class="text-red-500 mt-[16px]">
        {{ errorMessage }}
      </div>
    </form>
  </div>
</template>

<script>
import InputLabel from "../components/InputLabel.vue";

export default {
  components: {
    InputLabel,
  },
  data() {
    return {
      formData: {
        userName: "",
        userEmail: "",
        userLastName: "",
        userPhoneNumber: "",
        companyName: "",
        city: "",
        ic: "",
        firstName: "",
        phone: "",
        street: "",
        zipcode: "",
        vat: "",
        lastName: "",
        email: "",
      },
      errorMessage: "",
    };
  },
  methods: {
    validateForm() {
      this.errorMessage = "";
      const requiredFields = [
        "userName",
        "userEmail",
        "userLastName",
        "userPhoneNumber",
        "companyName",
        "city",
        "ic",
        "firstName",
        "phone",
        "street",
        "zipcode",
        "vat",
        "lastName",
        "email",
      ];

      for (let field of requiredFields) {
        if (!this.formData[field]) {
          this.errorMessage = "Please fill out all required fields.";
          return;
        }
      }

      this.submitForm();
    },
    submitForm() {
      console.log("Form submitted:", this.formData);
    },
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
