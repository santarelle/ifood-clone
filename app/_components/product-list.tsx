import { Prisma } from "@prisma/client"
import ProductItem from "./product-item"

interface productListProps {
    products: Prisma.ProductGetPayload<{
        include: {
            restaurant: {
                select: {
                    name: true
                }
            }
        }
    }>[]
}

const ProductList = async ({ products }: productListProps) => {
    return (
        <div className="flex gap-3 overflow-x-scroll px-5 [&::-webkit-scrollbar]:hidden">
            {products.map(p => (
                <ProductItem key={p.id} product={p} />
            ))}
        </div>
    )
}

export default ProductList
