import Image from "next/image";
import CategoryList from "./_components/category-list";
import Content from "./_components/content";
import Header from "./_components/header";
import Search from "./_components/search";

const Home = () => {
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
    </>
  );
};

export default Home;
