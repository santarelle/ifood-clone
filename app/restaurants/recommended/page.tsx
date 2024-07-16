import Header from "@/app/_components/header"
import RestaurantItem from "@/app/_components/restaurant-item"
import { db } from "@/app/_lib/prisma"

const RecommendedRestaurants = async () => {
  const restaurants = await db.restaurant.findMany({})
  return (
    <>
      <Header />
      <h2 className="px-5 py-6 text-lg font-semibold">
        Restaurantes Favoritos
      </h2>
      <div className="flex w-full flex-col gap-6 px-5">
        {restaurants.map(restaurant => (
          <RestaurantItem
            restaurant={restaurant}
            key={restaurant.id}
            className="min-w-full max-w-full"
          />
        ))}
      </div>
    </>
  )
}

export default RecommendedRestaurants
