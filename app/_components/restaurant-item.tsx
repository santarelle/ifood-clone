import { Restaurant } from "@prisma/client"
import { BikeIcon, HeartIcon, StarIcon, TimerIcon } from "lucide-react"
import Image from "next/image"
import { formatCurrency } from "../_helpers/price"
import { Button } from "./ui/button"
import Link from "next/link"
import { cn } from "../_lib/utils"

interface RestautantItemProp {
  restaurant: Restaurant
  className?: string
}
const RestaurantItem = ({ restaurant, className }: RestautantItemProp) => {
  return (
    <div className={cn("min-w-[266px] max-w-[266px] space-y-3", className)}>
      <div className="relative h-[136px] w-full">
        <Link href={`/restaurants/${restaurant.id}`}>
          <Image
            src={restaurant.imageUrl}
            alt={restaurant.name}
            fill
            className="rounded-lg object-cover shadow-md"
          />
        </Link>

        <div className="absolute left-2 top-2 flex items-center gap-1 rounded-full bg-white px-2 py-1">
          <StarIcon size={16} className="fill-yellow-400 text-yellow-400" />
          <span className="text-xs font-semibold">5.0</span>
        </div>

        <Button
          size="icon"
          className="absolute right-2 top-2 h-7 w-7 rounded-full  bg-gray-700"
        >
          <HeartIcon size={16} className="fill-white" />
        </Button>
      </div>

      <Link href={`/restaurants/${restaurant.id}`}>
        <h3 className="text-sm font-semibold">{restaurant.name}</h3>
        <div className="flex gap-3">
          <div className="flex items-center gap-1">
            <BikeIcon className="text-primary" size={14} />
            <span className="text-xs text-muted-foreground">
              {Number(restaurant.deliveryFee) === 0
                ? "Entrega grátis"
                : formatCurrency(Number(restaurant.deliveryFee))}
            </span>
          </div>

          <div className="flex items-center gap-1">
            <TimerIcon className="text-primary" size={14} />
            <span className="text-xs text-muted-foreground">
              {restaurant.deliveryTimeMinutes} min
            </span>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default RestaurantItem
