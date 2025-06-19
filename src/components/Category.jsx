import useCategoties from "../store/useCategories";
import CategoryBtn from "./CategoryBtn";
import Continer from "./Continer";
export default function Category() {
  const title = "Product Category";

  const {categories} = useCategoties();

  return (
    <section id="category-section" className="p-5">
      <Continer>
        <p className="text-sm text-gray-500 px-5 p-2 mb-2">{title}</p>
      <div className="flex overflow-x-scroll category-btn-container">
        {/* Render Category Buttons */}
        {categories.map((category) => ( 
            <CategoryBtn key={category.id} category={category} current={category.isActive}/>
        ))}
      </div>
      </Continer>
    </section>
  );
}
