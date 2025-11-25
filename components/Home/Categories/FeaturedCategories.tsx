import { categories } from "@/data/categories";
import CategoryCard from "./CategoryCard";
import { FaLayerGroup } from "react-icons/fa";

export default function FeaturedCategories() {
  return (
    <section>
      <div className="self-container py-16 px-4">

        {/* Section Title */}
        <div className="flex items-center gap-3 mb-10">
          <FaLayerGroup className="text-rose-500 text-2xl" />
          <h2 className="text-3xl font-bold text-white tracking-wide">
            Featured Categories
          </h2>
        </div>

        {/* Grid */}
        <div className="
          grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5
          gap-6
        ">
          {categories.map((cat) => (
            <CategoryCard key={cat.id} category={cat} />
          ))}
        </div>
      </div>
    </section>
  );
}
