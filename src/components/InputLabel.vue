<template>
  <div class="relative">
    <label
      :for="inputId"
      class="text-gray-500 absolute left-[10px] top-[10px]"
      :class="{ hidden: isHidden }"
    >
      {{ labelText }}<span class="text-red-500">*</span>
    </label>
    <input
      @input="toggleLabelVisibility($event)"
      @focus="toggleLabelVisibility($event)"
      @blur="toggleLabelVisibility($event)"
      class="px-[12px] py-[12px] w-full"
      :type="inputType"
      :id="inputId"
      required
    />
  </div>
</template>

<script>
export default {
  name: "InputLabel",
  props: {
    inputId: {
      type: String,
      required: true,
    },
    labelText: {
      type: String,
      required: true,
    },
    inputType: {
      type: String,
      default: "text",
    },
  },
  data() {
    return {
      isHidden: false,
    };
  },
  methods: {
    toggleLabelVisibility(event) {
      if (event.currentTarget.value !== "" || event.type === "focus") {
        this.isHidden = true;
      } else {
        this.isHidden = false;
      }
    },
  },
};
</script>

<style></style>
