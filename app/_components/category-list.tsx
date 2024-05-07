import { db } from "../_lib/prisma"
import CategoryItem from "./category-item"

const CategoryList = async () => {
  const categories = await db.category.findMany({})
  return (
    <div className="flex gap-3 overflow-x-auto px-5">
      {categories.map(c => (
        <CategoryItem key={c.id} category={c} />
      ))}
    </div>
  )
}

export default CategoryList
