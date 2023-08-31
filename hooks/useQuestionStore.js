import { create } from "zustand";

const useQuestionStore = create((set) => ({
  data: [],
  setData: (obj) => set((state) => ({ data: [...state.data, obj] })),
}));

export default useQuestionStore;
