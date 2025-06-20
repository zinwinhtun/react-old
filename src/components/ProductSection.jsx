import React from "react";
import ProductCart from "./ProductCart";
import Continer from "./Continer";
import useProductStore from "../store/useProductStore";
import useCategories from "../store/useCategories";

const ProductSection = () => {
  const name = "Available Product Lists";

  const { products } = useProductStore();
  const { categories } = useCategories();

  const activeCategory = categories.find((category) => category.isActive);
  return (
    <section className="p-5">
      <Continer>
        <p className="text-sm text-gray-500 px-5 p-2 mb-2">{name}</p>
        {/* product list  */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {products
            .filter(
              (el) =>
                activeCategory.name === "all" ||
                el.category === activeCategory.name
            )
            .map((product) => (
              <ProductCart key={product.id} product={product} />
            ))}
        </div>
      </Continer>
    </section>
  );
};

export default ProductSection;
