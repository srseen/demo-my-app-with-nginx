import { Product, products } from "@/data/products";
import ProductCard from "@/components/ui/ProductCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Separator } from "@/components/ui/separator";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

interface ProductGroup {
  title: string;
  products: Product[];
  emptyMessage: string;
}

export default function HomePage() {
  const productGroups: ProductGroup[] = [
    {
      title: "สินค้าขายดี",
      products: products.filter((product) => product.isBestSeller),
      emptyMessage: "ไม่มีสินค้าขายดีในขณะนี้.",
    },
    {
      title: "สินค้าแนะนำ",
      products: products.filter((product) => product.isRecommended),
      emptyMessage: "ไม่มีสินค้าแนะนำในขณะนี้.",
    },
  ];

  return (
    <>
      <div className="container py-5">
        <h1 className="text-4xl font-bold text-center">ยินดีต้อนรับ</h1>
        <p className="text-center m-2">เลือกซื้อสินค้าที่คุณต้องการได้เลย</p>
      </div>
      <Separator className="m-2" />
      <div className="container py-10">
        {/* Best Sellers Carousel */}
        {productGroups.map((group) => (
          <section key={group.title} className="mb-12">
            <h2 className="text-2xl font-bold mb-4">{group.title}</h2>
            <Separator className="mb-4" />
            <ScrollArea className="w-full whitespace-nowrap rounded-md">
              {group.products.length > 0 ? (
                <Carousel className="w-full">
                  <CarouselContent className="-ml-1">
                    {group.products.map((product) => (
                      <CarouselItem
                        key={product.id}
                        className=" sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
                      >
                        <div className="p-1">
                          <ProductCard product={product} />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                </Carousel>
              ) : (
                <p>{group.emptyMessage}</p>
              )}
              <ScrollBar orientation="horizontal" />
            </ScrollArea>
          </section>
        ))}
      </div>
    </>
  );
}
