<template>
  <div class="tags has-addons level-item are-medium">
    <span class="tag is-rounded" :class="`is-${color}`">{{ title }}</span>
    <span class="tag is-rounded">{{ formattedDate }}</span>
  </div>
</template>

<script setup>
const props = defineProps({
  author: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  color: {
    type: String,
    default: 'info'
  }
})
const formattedDate = computed(() => {
  return new Date(props.date).toDateString()
})
</script>