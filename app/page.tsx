import Image from "next/image";
import CategoryList from "./_components/category-list";
import Content from "./_components/content";
import Header from "./_components/header";
import Search from "./_components/search";
import ProductList from "./_components/product-list";
import SectionTitle from "./_components/section-title";
import { Button } from "./_components/ui/button";
import { ChevronRightIcon } from "lucide-react";
import { db } from "./_lib/prisma";

const Home = async () => {
  const products = await db.product.findMany({
    where: {
      discountPercentage: {
        gt: 0,
      },
    },
    take: 10,
    include: {
      restaurant: {
        select: {
          name: true,
        },
      },
    },
  });

  return (
    <>
      <Header />
      <Content>
        <Search />
      </Content>
      <Content>
        <CategoryList />
      </Content>

      <Content>
        <Image
          src="/promo-banner-01.png"
          alt="Até 30% de desconto em pizzas"
          width={0}
          height={0}
          sizes="100vw"
          className="h-auto w-full"
        />
      </Content>

      <Content className="space-y-4 px-0">
        <div className="flex items-center justify-between px-5">
          <SectionTitle title="Pedidos Recomendados" />
          <Button
            variant="ghost"
            className="h-fit px-0 text-primary hover:bg-transparent"
          >
            Ver todos
            <ChevronRightIcon size={16} />
          </Button>
        </div>
        <ProductList products={products} />
      </Content>
    </>
  );
};

export default Home;
