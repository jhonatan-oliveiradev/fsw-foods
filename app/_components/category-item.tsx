import { Category } from "@prisma/client";
import Image from "next/image";

interface CategoryItemProps {
  category: Category;
}

const CategoryItem = ({ category }: CategoryItemProps) => {
  return (
    <div className="flex min-w-[160px] items-center justify-center gap-3 rounded-lg bg-white px-4 py-3 shadow-md">
      <Image
        src={category.imageUrl}
        alt={category.name}
        height={30}
        width={30}
        className="h-fit"
      />

      <span className="text-sm font-semibold">{category.name}</span>
    </div>
  );
};

export default CategoryItem;
