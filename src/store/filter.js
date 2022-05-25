import { defineStore } from "pinia";

export const useFilterStore = defineStore({
  id: "filter",
  state: () => ({
    _open: false,
  }),
  getters: {
    status: (state) => state._open,
  },
  actions: {
    toggleFilter() {
      this._open = !this._open;
    },
  },
});