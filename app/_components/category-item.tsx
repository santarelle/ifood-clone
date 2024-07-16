import { Category } from "@prisma/client"
import Image from "next/image"
import Link from "next/link"

interface CategoryItemProps {
  category: Category
}

const CategoryItem = ({ category }: CategoryItemProps) => {
  return (
    <Link
      href={`/categories/${category.id}/products`}
      className="flex flex-none items-center rounded-full bg-white px-4 py-3 shadow-sm"
    >
      <Image
        src={category.imageUrl}
        alt={category.name}
        height={30}
        width={30}
      />

      <span className="pl-2 pr-3 text-sm font-semibold">{category.name}</span>
    </Link>
  )
}

export default CategoryItem
