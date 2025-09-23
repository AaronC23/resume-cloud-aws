import Title from "./Title";
import Content from "./Content";
import OuterLayout from "./OuterLayout";

function Layout({ children }: any) {
  return (
    <OuterLayout>
      <Title />
      <Content>{children}</Content>
    </OuterLayout>
  );
}

export default Layout;
