export default function CategoryBtn({ category, current }) {
    return (
        <button className={`${current && "bg-red-500 text-white" } text-nowrap border border-black px-4 py-2 me-2`}>
            {category}
          </button>
    );
}