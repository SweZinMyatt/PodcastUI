import images from '#/constant/image.ts'
import { Link } from '@tanstack/react-router'
import {Search} from "lucide-react"

function Header() {
  return (
    <>
      <div className="flex flex-row pb-12 items-center md:justify-between gap-3  text-black z-1 absolute  w-full h-25 md:px-10 px-5">
        <img src={images.logo} alt="logo" className='md:w-33 md:h-[20px] w-[70px] h-[15px]'></img>

        <nav className="flex md:gap-5 gap-2 items-center md:text-[15px] text-[10px] font-bold">
          <Link to="/">Homes</Link>
          <Link to="/pages">Pages</Link>
          <Link to="/pocast">Pocast</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/shop">Shop</Link>
        </nav>

        <div className='flex gap-5  items-center'>
            <div className='flex md:gap-3 items-center md:text-[15px] text-[10px] font-bold'>
                <Search/>
                <span>Search</span>
            </div>
            <img src={images.dot} alt='dot' className='md:size-[25px] size-[18px]'></img>
        </div>

      </div>
    </>
  )
}

export default Header
