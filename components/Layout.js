function Layout({ children, headline = "Headline" }) {
  return (
    <>
      <header>
        <h1>{headline}</h1>
      </header>
      <main>Content: {children}</main>
      <footer>Keine Ahnung Copyright</footer>
    </>
  );
}

export default Layout;
