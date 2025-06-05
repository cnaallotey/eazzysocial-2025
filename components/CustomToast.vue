<template>
  <div v-if="isVisible" :class="['fixed bottom-5 right-5 p-4 rounded-md text-white shadow-lg', toastClass]">
    {{ message }}
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const isVisible = ref(false);
const message = ref('');
const type = ref('success'); // 'success' or 'error'
let timeoutId = null;

const toastClass = computed(() => {
  if (type.value === 'success') {
    return 'bg-green-500';
  } else if (type.value === 'error') {
    return 'bg-red-500';
  }
  return '';
});

const showToast = (msg, toastType = 'success', duration = 3000) => {
  message.value = msg;
  type.value = toastType;
  isVisible.value = true;

  if (timeoutId) {
    clearTimeout(timeoutId);
  }

  timeoutId = setTimeout(() => {
    isVisible.value = false;
  }, duration);
};

// Expose the showToast function to the parent component
defineExpose({
  showToast
});
</script>

<style scoped>
/* Add any specific styles here if needed */
</style> 