import CategoryBtn from "./CategoryBtn";
export default function Category() {
  const title = "Product Category";

  const categories = [
    "electronics",
    "jewelery",
    "men's clothing",
    "women's clothing",
  ];

  return (
    <section id="category-section" className="p-5">
      <p className="text-sm text-gray-500 px-5 p-2 mb-2">{title}</p>
      <div className="flex overflow-x-scroll category-btn-container">
        <CategoryBtn category="all" current={true} />
        {categories.map((category) => (
            <CategoryBtn key={category} category={category} current={false}/>
        ))}
      </div>
    </section>
  );
}
