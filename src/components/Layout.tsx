import Title from "./Title";
import Footer from "./Footer";
import Border from "./Border";
import PageLayout from "./PageLayout";
import Navbar from "./Navbar";
import Content from "./Content";
import OuterLayout from "./OuterLayout";

function Layout({ children }: any) {
  return (
    <OuterLayout>
      <Border>
        <Title />
        <PageLayout>
          <Navbar />
          <Content>{children}</Content>
        </PageLayout>
      </Border>
      <Footer />
    </OuterLayout>
  );
}

export default Layout;
