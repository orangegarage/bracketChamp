<script setup lang="ts">
const content = ["Hello", "world"];
</script>

<template>
  <div>
    <table>
      <tr v-for="word in content" v-bind:key="word">
        <td>{{ word }}</td>
      </tr>
    </table>
  </div>
</template>
