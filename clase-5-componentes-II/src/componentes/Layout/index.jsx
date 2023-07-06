function Layout (props) {
  return (
    <div>
      <header>
        <h1>{props.title}</h1>
      </header>
      <main>
       { props.children }
      </main>
      <footer>
        Footer
      </footer>
    </div>
  )
}

export default Layout;
