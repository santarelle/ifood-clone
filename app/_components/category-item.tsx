import { Category } from "@prisma/client"
import Image from "next/image"

interface CategoryItemProps {
    category: Category
}

const CategoryItem = ({ category }: CategoryItemProps) => {
    return (
        <div className="flex flex-none items-center rounded-full bg-white px-4 py-3 shadow-sm">
            <Image
                src={category.imageUrl}
                alt={category.name}
                height={30}
                width={30}
            />

            <span className="pl-3 text-sm font-semibold">{category.name}</span>
        </div>
    )
}

export default CategoryItem
