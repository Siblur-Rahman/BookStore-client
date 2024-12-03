import { useEffect, useState } from "react";
import { FaBlog } from "react-icons/fa";
import { FaBarsStaggered, FaXmark } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen]= useState(false);
    const [isSticky, setIsSticky]= useState(false);
    const toggleMenu =()=>{
        setIsMenuOpen(!isMenuOpen)
    }

    useEffect(()=>{
        const handleScroll =()=>{
            if(window.scrollY > 100){
                setIsSticky(true);
            }
            else{
                setIsSticky(false)
            }
        }
        document.addEventListener("scroll", handleScroll);

        return ()=>{
            document.addEventListener("scroll", handleScroll);
        }
    }, [])

    // naveItems

   const  navItems: {link:string; path: string}[] =[
        
            {link: "HOME", path:"/"},
            {link: "About", path:"/about"},
            {link: "Shop", path:"/shop"},
            {link:"Sell Your Book", path:"/admin/dashboard"},
            {link:"Blog", path:"/blog"}
    ]
    return (
        <header className={`w-full top-0 left-0 right-0 transition-all ease-in duration-300 ${isSticky ? "sticky top-0 left-0 right-0 bg-blue-300" : ""}`}>
            <nav className={`py-4 lg:px-24 px-4`}>
                <div className="flex justify-between items-center text-base gap-2">
                    {/* logo */}
                    <Link to='/' className="text-2xl font-bold text-blue-700 flex items-center gap-2"><FaBlog className="inline-block"/> BookStore</Link>
                    {/* navItems for larg-device*/}
                    <ul className="md:flex space-x-12 hidden">
                        {
                            navItems.map(({link, path}, index)=><Link key={index} to={path} className="block text-base text-black uppercase cursor-pointer hover:text-blue-700" >{link}</Link>)
                        }
                    </ul>

                    {/* btn for lg-device */}
                    <div className="space-x-12 hidden lg:flex items-center">
                        <button>
                            <FaBarsStaggered className="w-5 hover:text-blue-700"/>
                        </button>
                    </div>

                    {/* menu btn fo the mobile device */}
                    <div className='md:hidden'>
                        <button onClick={toggleMenu}>
                            {
                                isMenuOpen? <FaXmark/>: <FaBarsStaggered className="h-5 w-5 text-black"/>
                            }
                        </button>
                    </div>
                </div>
                    {/* menu btn for sm device */}
                    <div className={`space-y-4 px-4 mt-16 py-7 bg-blue-700 ${isMenuOpen ? "block fixed top-0 right-0 left-0": "hidden"}`}>
                        {
                            navItems.map(({link, path}, index)=><Link key={index} to={path} className="block text-base text-white uppercase cursor-pointer" >{link}</Link>)
                        }
                    </div>
            </nav>
        </header>
    );
};

export default Navbar;