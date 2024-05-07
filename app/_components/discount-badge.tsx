import { Product } from "@prisma/client"
import { ArrowDownIcon } from "lucide-react"

interface DiscountBadgeProps {
  product: Pick<Product, "discountPercentage">
}
const DiscountBadge = ({ product }: DiscountBadgeProps) => {
  return (
    <div className="flex items-center justify-center gap-[2px] rounded-full bg-primary px-2 py-[2px] font-semibold text-white">
      <ArrowDownIcon size={14} />
      <span className="text-xs font-semibold">
        {product.discountPercentage}%
      </span>
    </div>
  )
}

export default DiscountBadge
