import { db } from "../_lib/prisma"
import ProductItem from "./product-item"

const ProductList = async () => {
    const products = await db.product.findMany({
        where: {
            discountPercentage: {
                gt: 0,
            },
        },
        take: 10,
        include: {
            restaurant: {
                select: { name: true },
            },
        },
    })
    return (
        <div className="flex gap-3 overflow-x-scroll px-5 [&::-webkit-scrollbar]:hidden">
            {products.map(p => (
                <ProductItem key={p.id} product={p} />
            ))}
        </div>
    )
}

export default ProductList
