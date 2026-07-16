import images from '#/constant/image.ts'
import { Link } from '@tanstack/react-router'
import {Search} from "lucide-react"
function Header() {
  return (
    <>
      <div className="flex md:flex-row flex-col md:pt-0 pt-5 space-y-4 items-center justify-between text-black z-1 absolute  w-full h-[100px] px-10">
        <img src={images.logo} alt="logo"></img>

        <nav className="flex gap-5 items-center text-[15px] font-bold">
          <Link to="/">Homes</Link>
          <Link to="/pages">Pages</Link>
          <Link to="/pocast">Pocast</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/shop">Shop</Link>
        </nav>

        <div className='flex md:gap-5 gap-50 items-center'>
            <div className='flex md:gap-3 gap-2 items-center text-[15px] font-bold'>
                <Search/>
                <span>Search</span>
            </div>
            <img src={images.dot} alt='dot'></img>
        </div>

      </div>
    </>
  )
}

export default Header
