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
    </>
  );
};

export default Home;
