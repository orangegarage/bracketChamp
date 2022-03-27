import { defineStore } from "pinia";

export const store = defineStore("store", {
  state: () => ({
    token: "",
  }),
});
