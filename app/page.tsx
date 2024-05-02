import Image from "next/image"
import CategoryList from "./_components/category-list"
import Header from "./_components/header"
import Search from "./_components/search"
import ProductList from "./_components/product-list"
import { Button } from "./_components/ui/button"
import { ChevronRightIcon } from "lucide-react"

const Home = () => {
    return (
        <>
            <Header />
            <div className="px-5 pt-6">
                <Search />
            </div>
            <div className="pt-6">
                <CategoryList />
            </div>

            <div className="pt-6">
                <Image
                    src="/promo-banner-01.png"
                    alt="Até 30% de descontos em pizzas"
                    width={0}
                    height={0}
                    className="h-auto w-full object-cover"
                    sizes="100vw"
                    quality={100}
                />
            </div>

            <div className="space-y-4 pt-5">
                <div className="flex items-center justify-between pl-5">
                    <h2 className="font-semibold">Pedidos Recomendados</h2>
                    <Button
                        variant="ghost"
                        className="h-fit text-primary hover:bg-transparent"
                    >
                        Ver todos
                        <ChevronRightIcon size={16} />
                    </Button>
                </div>
                <ProductList />
            </div>
        </>
    )
}

export default Home
