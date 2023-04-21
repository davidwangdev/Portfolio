import { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuery from "../hooks/useMediaQuery";

function Link({page, selectedPage, setSelectedPage}) {
  const lowerCasePage = page.toLowerCase();
  return (
    <AnchorLink className={`${selectedPage === lowerCasePage ? 'text-yellow' : ''} 
    hover:text-yellow transition duration-500`} 
    href={`#${lowerCasePage}`} 
    onClick={() => setSelectedPage(lowerCasePage)}>
      {page}
    </AnchorLink>
  )
}

export default function Navbar({isTopOfPage, selectedPage, setSelectedPage}) {
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const isAboveSmallScreens = useMediaQuery("(min-width: 768px)");
  const navbarBackground = isTopOfPage ? '' : 'bg-red';

  return (
    <nav className={`${navbarBackground} z-40 w-full fixed top-6`}>
      <div className='flex items-center justify-center mx-auto w-5/6'>
        {/* DESKTOP NAV */}
        {isAboveSmallScreens ? 
          (
            <div className='flex gap-16 text-sm font-semibold'>
              <Link page="Home" 
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
              />
              <Link page="About" 
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
              />
              <Link page="Projects" 
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
              /> 
              <Link page="Contact Me" 
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
              />            
          </div>
          )
          :
          (
            <button className='rounded-full bg-red p-2'
            onClick={() => setIsMenuToggled(!isMenuToggled)}>
              <img src="/menu-icon.svg" />
            </button>
          )}

          {/* Mobile Menu Popup */}
          {!isAboveSmallScreens && isMenuToggled && (
            <div className='fixed right-0 bottom-0 h-full bg-blue w-[300px]'>
              {/* CLOSE ICON */}
              <div className='flex justify-end p-12'>
                <button onClick={() => setIsMenuToggled(!isMenuToggled)}></button>
              </div>

              {/* MENU ITEMS */}
              <div className='flex flex-col gap-10 ml-[33%] text-2xl text-deep-blue'>
                <Link page="Home"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                <Link page="About"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                <Link page="Projects"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                <Link page="Contact Me"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />   
              </div>
            </div>
          )}
      </div>
    </nav>
  )
}