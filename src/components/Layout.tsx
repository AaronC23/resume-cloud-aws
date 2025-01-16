import Title from "./Title";
import Footer from "./Footer";
import Border from "./Border";
import PageLayout from "./PageLayout";
import Navbar from "./Navbar";
import Content from "./Content";
import OuterLayout from "./OuterLayout";
import BackgroundImage from "./BackgroundImage";

function Layout({ children }: any) {
  return (
    <OuterLayout>
      <BackgroundImage>
        <Border>
          <Title />
          <PageLayout>
            <Navbar />
            <Content>{children}</Content>
          </PageLayout>
        </Border>
      </BackgroundImage>
      <Footer />
    </OuterLayout>
  );
}

export default Layout;
