import { defineStore } from "pinia";
import { getChallongeTournamentInfo } from "../api/smashgg";

export const useStore = defineStore("store", {
  state: () => ({
    tournament: null as any | null,
  }),
  actions: {
    async setTournament() {
      try {
        return await getChallongeTournamentInfo();
      } catch (error) {
        console.error(error);
      }
    },
  },
});
