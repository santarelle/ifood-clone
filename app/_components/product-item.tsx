import { Prisma } from "@prisma/client"
import Image from "next/image"
import { calculateProductTotalPrice, formatCurrency } from "../_helpers/price"
import { ArrowDownIcon } from "lucide-react"

interface ProductItemProps {
    product: Prisma.ProductGetPayload<{
        include: {
            restaurant: {
                select: {
                    name: true
                }
            }
        }
    }>
}

const ProductItem = ({ product }: ProductItemProps) => {
    return (
        <div className="w-[150px] min-w-[150px] space-y-2">
            <div className="relative h-[150px] w-full">
                <Image
                    src={product.imageUrl}
                    alt={product.name}
                    fill
                    className="rounded-lg object-cover shadow-md"
                />

                {product.discountPercentage && (
                    <div className="absolute left-2 top-2 flex items-center justify-center gap-[2px] rounded-full bg-primary px-2 py-[2px] font-semibold text-white">
                        <ArrowDownIcon size={14} />
                        <span className="text-xs font-semibold">
                            {product.discountPercentage}%
                        </span>
                    </div>
                )}
            </div>

            <div>
                <h2 className="truncate text-sm">{product.name}</h2>
                <div className="flex items-center gap-1">
                    <h3 className="font-semibold">
                        {formatCurrency(calculateProductTotalPrice(product))}
                    </h3>
                    <span className="text-xs text-muted-foreground line-through">
                        {formatCurrency(Number(product.price))}
                    </span>
                </div>
                <span className="block text-xs text-muted-foreground">
                    {product.restaurant.name}
                </span>
            </div>
        </div>
    )
}

export default ProductItem
