<template>
  <form @submit.prevent="submitForm">
    <div class="flex gap-[12px]">
      <div class="flex flex-col gap-[12px] w-full">
        <input
          class="px-[12px] py-[12px] w-full"
          type="text"
          id="name"
          placeholder="Jméno*"
          required
        />
        <input
          class="px-[12px] py-[12px] w-full"
          type="text"
          id="name"
          placeholder="Email*"
          required
        />
      </div>
      <div class="flex flex-col gap-[12px] w-full">
        <input
          class="px-[12px] py-[12px] w-full"
          type="text"
          id="name"
          placeholder="Příjmení*"
          required
        />
        <input
          class="px-[12px] py-[12px] w-full"
          type="text"
          id="name"
          placeholder="Telefon*"
          required
        />
      </div>
    </div>
  </form>
</template>

<script>
export default {
  name: "FormContacts",
};
</script>

<style></style>
