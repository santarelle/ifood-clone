import { BikeIcon, TimerIcon } from "lucide-react"
import { Card } from "./ui/card"
import { formatCurrency } from "../_helpers/price"
import { Restaurant } from "@prisma/client"

interface DeliveryInfoProps {
  restaurant: Pick<Restaurant, "deliveryFee" | "deliveryTimeMinutes">
}

const DeliveryInfo = ({ restaurant }: DeliveryInfoProps) => {
  return (
    <Card className="mt-5 flex justify-around py-3">
      <div className="flex flex-col gap-1 text-center">
        <div className="flex items-center gap-1 text-muted-foreground">
          <span className="text-xs">Entrega</span>
          <BikeIcon size={14} />
        </div>

        <p className="text-xs font-semibold">
          {Number(restaurant.deliveryFee) > 0
            ? formatCurrency(Number(restaurant.deliveryFee))
            : "Grátis"}
        </p>
      </div>

      <div className="flex flex-col gap-1 text-center">
        <div className="flex items-center gap-1 text-muted-foreground">
          <span className="text-xs">Entrega</span>
          <TimerIcon size={14} />
        </div>

        <p className="text-xs font-semibold">
          {Number(restaurant.deliveryTimeMinutes)} min
        </p>
      </div>
    </Card>
  )
}

export default DeliveryInfo
