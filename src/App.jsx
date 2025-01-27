import Banner from "./components/banner";
import HomeTabs from "./components/homeTabs";
import ProductsGrid from "./components/products";
import Sidebar from "./components/sidebar";
import Wrapper from "./components/wrapper";

function App() {
  return (
    <>
      <div className="min-h-screen">
        <Banner />
        <HomeTabs />
        <Wrapper>
          <div className="flex gap-0 md:gap-4 mt-4">
            {/* Sidebar */}

            <div className="col-span-2">
              <Sidebar />
            </div>

            {/* Products Grid */}
            <div className="col-span-10">
              <ProductsGrid />
            </div>
          </div>
        </Wrapper>
      </div>
    </>
  );
}

export default App;
