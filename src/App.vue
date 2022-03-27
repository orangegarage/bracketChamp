<script setup lang="ts">
import { onMounted } from "vue";
import { useStore } from "./config/store";

const store = useStore();

const content = ["Hello", "world"];

onMounted(async () => {
  store.setTournament().then(() => console.log(store.tournament));
});
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
