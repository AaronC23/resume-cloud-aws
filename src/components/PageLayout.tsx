function PageLayout({ children }: any) {
  return (
    <>
      <div className="grid grid-cols-3 gap-5 layout">{children}</div>
    </>
  );
}

export default PageLayout;
