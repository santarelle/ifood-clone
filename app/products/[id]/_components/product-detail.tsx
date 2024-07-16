"use client"

import DeliveryInfo from "@/app/_components/delivery-info"
import DiscountBadge from "@/app/_components/discount-badge"
import ProductList from "@/app/_components/product-list"
import { Button } from "@/app/_components/ui/button"
import {
  calculateProductTotalPrice,
  formatCurrency,
} from "@/app/_helpers/price"
import { Prisma } from "@prisma/client"
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

interface ProductDetailProps {
  product: Prisma.ProductGetPayload<{
    include: {
      restaurant: true
    }
  }>
  complementaryProducts: Prisma.ProductGetPayload<{
    include: {
      restaurant: true
    }
  }>[]
}

const ProductDetail = ({
  product,
  complementaryProducts,
}: ProductDetailProps) => {
  const [quantity, setQuantity] = useState(1)

  const handleIncrementQuantityClick = () =>
    setQuantity(prev => (prev === 1 ? prev : prev - 1))
  const handleDecrementQuantityClick = () => setQuantity(prev => prev + 1)

  return (
    <div className="relative z-50 mt-[-1.5rem] rounded-t-3xl bg-white py-5">
      <div className="flex items-center gap-1 px-5">
        <div className="relative h-6 w-6">
          <Image
            src={product.restaurant.imageUrl}
            alt={product.restaurant.name}
            fill
            className="rounded-full object-cover"
          />
        </div>
        <span className="text-xs text-muted-foreground">
          {product.restaurant.name}
        </span>
      </div>

      <h1 className="mb-2 mt-1 px-5 text-xl font-semibold">{product.name}</h1>

      <div className="flex justify-between px-5">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-xl font-semibold">
              {formatCurrency(calculateProductTotalPrice(product))}
            </h2>
            {product.discountPercentage && <DiscountBadge product={product} />}
          </div>
          <p className="text-sm text-muted-foreground">
            De: {formatCurrency(Number(product.price))}
          </p>
        </div>

        <div className="flex items-center gap-3 text-center">
          <Button
            size="icon"
            variant="ghost"
            className="shadow-xs border border-solid border-[#EEEEEE] bg-white shadow-sm"
            onClick={handleIncrementQuantityClick}
          >
            <ChevronLeftIcon />
          </Button>
          <span className="w-4">{quantity}</span>
          <Button
            size="icon"
            onClick={handleDecrementQuantityClick}
            className="shadow-sm"
          >
            <ChevronRightIcon />
          </Button>
        </div>
      </div>

      <div className="px-5">
        <DeliveryInfo restaurant={product.restaurant} />
      </div>

      <div className="mt-6 space-y-3 px-5">
        <h3 className="font-semibold">Sobre</h3>

        <p className="text-sm text-muted-foreground">{product.description}</p>
      </div>

      <div className="mb-3 mt-6 space-y-3 px-5">
        <h3 className="font-semibold">Sucos</h3>
      </div>

      <ProductList products={complementaryProducts} />

      <div className="mt-6 px-5">
        <Button className="w-full font-semibold">Adicionar à sacola</Button>
      </div>
    </div>
  )
}

export default ProductDetail
