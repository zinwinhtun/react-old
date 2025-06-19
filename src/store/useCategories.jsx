import { create } from "zustand";

const useCategoties = create(() => ({
  categories: ["electronics", "jewelery", "men's clothing", "women's clothing"],
}));

export default useCategoties;
