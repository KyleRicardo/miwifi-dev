<script setup lang="ts">
import { computed, ref } from "vue";
import { calc } from "@/utils/miwifi_calc";
import { toClipboard } from "@soerenmartius/vue3-clipboard";
const sn = ref("");
const password = ref("");

const isSnNotValid = computed(() => {
  return sn.value === "";
});

const isPasswordNotCalculated = computed(() => {
  return password.value === "";
});

function calculate() {
  password.value = calc(sn.value);
}
</script>

<template>
  <h2>MiWiFi SSH Password Calculator</h2>
  <div class="form">
    <div class="input">
      <input placeholder="SN" v-model="sn" />
      <button :disabled="isSnNotValid" @click="calculate">Calc</button>
    </div>
    <div class="input">
      <input readonly placeholder="Password" v-model="password" />
      <button
        :disabled="isPasswordNotCalculated"
        @click="toClipboard(password)"
      >
        Copy
      </button>
    </div>
  </div>
</template>

<style scoped>
h2 {
  margin-top: 1.5rem;
  text-align: center;
}

.input {
  margin-top: 2rem;
  display: flex;
  place-content: center;
  place-items: center;
}

input {
  min-width: 128px;
  width: 60%;
  height: 32px;
  transition: border ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
}

input:focus {
  outline: 0;
  border: 1px solid #ff6900;
  box-shadow: 0 0 5px #ff6900;
}

button {
  border: 0;
  background-color: var(--color-heading);
  margin-left: 0.4rem;
  border-radius: 16px;
  height: 32px;
  width: 64px;
  background-color: hsla(24.706, 100%, 50%, 1);
  color: var(--color-text);
  transition: 0.4s;
}

button:disabled {
  pointer-events: none;
  background-color: hsla(24.706, 100%, 50%, 0.5);
}

input:read-only {
  pointer-events: none;
}

button:hover {
  background-color: hsla(24.706, 100%, 50%, 0.2);
}

@media (min-width: 1024px) {
  h2 {
    margin: auto;
  }

  .input {
    margin-top: 2rem;
  }
}
</style>
