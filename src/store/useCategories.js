import { create } from "zustand";

const useCategoties = create((set) => ({
  //get categories
  categories:[
  { id: 0, name: "all", isActive: true },
  { id: 1, name: "electronics", isActive: false },
  { id: 2, name: "jewelery", isActive: false },
  { id: 3, name: "men's clothing", isActive: false },
  { id: 4, name: "women's clothing", isActive: false }
],
//set active category
activeCategory: (categoryId) => set((state) => ({
  categories: state.categories.map((el)=>
  el.id === categoryId ? {...el, isActive: true}: {...el,isActive: false})
})),

}));

export default useCategoties;
