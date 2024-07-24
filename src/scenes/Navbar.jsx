import AnchorLink from "react-anchor-link-smooth-scroll";

function Link({page, selectedPage, setSelectedPage}) {
  const lowerCasePage = page.toLowerCase();
  return (
    <AnchorLink 
    className={ `${selectedPage === lowerCasePage ? 'text-yellow' : '' } 
    hover:text-yellow transition duration-500` } 
    href={`#${lowerCasePage}`} 
    onClick={() => setSelectedPage(lowerCasePage)}>
      {page}
    </AnchorLink>
  )
}

export default function Navbar({isTopOfPage, selectedPage, setSelectedPage}) {
  const navbarBackground = isTopOfPage ? '' : '';

  return (
    <nav className={`${navbarBackground} z-40 w-full fixed p-6`}>
      <div className='flex items-center justify-center mx-auto w-5/6'>
        <div className='flex gap-16 text-lg font-semibold'>
          <Link page="Home" 
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
          <Link page="Skills" 
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
          <Link page="Projects"
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          /> 
          <Link page="Contact" 
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />            
        </div>
      </div>
    </nav>
  )
}