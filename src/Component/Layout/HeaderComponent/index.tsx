import { Link } from 'react-router-dom'
import logo from '../../../assets/logo.jpg'

import { useState, useEffect } from 'react';

const Header: React.FC = () => {
    const [showMenu, setShowMenu] = useState<boolean>(false);
    const [theme, setTheme] = useState<'light' | 'dark'>(() => {
        return localStorage.getItem('theme') === 'dark' ? 'dark' : 'light'
    })
    useEffect(() => {
        const html = document.documentElement
        if (theme === 'dark') {
            html.classList.add('dark')
        } else {
            html.classList.remove('dark')
        }
        localStorage.setItem('theme', theme)
    }, [theme])

    const navLinks = [
        {
            path: '/about',
            title: 'Giới thiệu'
        },
        {
            path: '/seller-channel',
            title: 'Kênh người bán'
        },
        {
            path: '/shop-information',
            title: 'Thông tin shop'
        },
        {
            icon_class: 'fas fa-arrow-right opacity-45'
        }
    ]
    return (
        <header className="w-full flex flex-col justify-center items-center py-5 transition-all text-black gap-6 bg-white dark:bg-bg-black dark:text-white dark:border-b-1 border-0 dark:border-gray-700 shadow-xl dark:shadow-none">
            <div className='flex md:flex-row justify-between items-center w-wcontainer md:w-full max-w-[1200px] '>
                <ul className='hidden md:flex items-center gap-2'>
                    {navLinks
                        .filter(item => item.path) 
                        .map((item, index) => {
                        return (
                            <li key={index} className='border-r-1 border-gray-500 pr-5 py-1 text-sm'>
                                <Link to={item.path!} className='cursor-pointer hover:text-gray-400'>{item.title}</Link>
                            </li>
                        )
                    })}
                    <button className='text-white px-4 py-1 cursor-pointer text-sm bg-black dark:bg-white dark:text-black rounded ml-4' onClick={() => setTheme(prev => (prev === 'light' ? 'dark' : 'light'))}>
                        {theme === 'light' ? 'Tối' : 'Sáng'}
                    </button>
                </ul>
                <div className="md:hidden relative inline-block text-left">
                    <button onClick={() => setShowMenu(!showMenu)} className="z-20 cursor-pointer relative" >
                        <i className="fas fa-bars text-lg"></i>
                    </button>
                    <button className='text-white px-4 py-1 cursor-pointer text-sm bg-black dark:bg-white dark:text-black rounded ml-4' onClick={() => setTheme(prev => (prev === 'light' ? 'dark' : 'light'))}>
                        {theme === 'light' ? 'Tối' : 'Sáng'}
                    </button>

                    {showMenu && (
                        <>
                            <div
                                className="fixed inset-0 bg-white/10 backdrop-blur-md z-10"
                                onClick={() => setShowMenu(false)}
                            ></div>
                            <ul className="fixed left-[50%] transform -translate-x-1/2 pt-2 right-[50%] mt-3 bg-gray-200 dark:bg-[#161616] dark:text-white rounded-md shadow-lg z-20 w-wcontainer">
                                {navLinks
                                    .filter(item => item.path) 
                                    .map((item, index) => (
                                        <Link
                                            key={index}
                                            to={item.path!} 
                                            className="text-sm px-4 py-3 hover:bg-gray-600 cursor-pointer flex justify-between items-center"
                                            >
                                            <li className="cursor-pointer hover:text-gray-400">
                                                <span>{item.title}</span>
                                                <i className={item.icon_class}></i>
                                            </li>
                                        </Link>
                                    ))
                                }
                                <div className='mt-2 py-3 border-t-1 border-zinc-700'>
                                    <Link to='https://www.facebook.com/profile.php?id=61575260197423&locale=vi_VN' onClick={() => setShowMenu(false)}>
                                        <li className="text-sm px-4 py-3 hover:bg-gray-600 cursor-pointer flex justify-between items-center">
                                            <div className='flex gap-3 items-center'>
                                                <i className="fab fa-facebook text-lg"></i>
                                                <span>Facebook ( Phương Huy )</span>
                                            </div>
                                            <i className="fas fa-arrow-right opacity-45"></i>
                                        </li>
                                    </Link>
                                    <Link to='https://www.youtube.com/@phuonghuy_coder' onClick={() => setShowMenu(false)}>
                                        <li className="text-sm px-4 py-3 hover:bg-gray-600 cursor-pointer flex justify-between items-center">
                                            <div className='flex gap-3 items-center'>
                                                <i className="fab fa-youtube"></i>
                                                <span>Youtube</span>
                                            </div>
                                            <i className="fas fa-arrow-right opacity-45"></i>
                                        </li>
                                    </Link>
                                </div>
                            </ul>

                        </>
                    )}
                </div>
                <div className='flex gap-2'>
                    <Link to='/login' className='cursor-pointer pr-1 md:pr-2 text-sm hover:text-gray-400'>Đăng nhập</Link>
                    <div className='w-[1px] bg-gray-500 h-5'></div>
                    <Link to='/signup' className='cursor-pointer pl-1 md:pl-2 text-sm hover:text-gray-400'>Đăng kí</Link>
                </div>
            </div>
            <div className='flex md:flex-row flex-col justify-center md:justify-between items-center w-wcontainer md:w-full max-w-[1200px] gap-3 md:gap-5'>
                <div className="flex items-center gap-2 md:gap-3 shrink-0">
                    <img className='rounded-full size-[45px] md:size-[50px] border-2' src={logo} alt=""></img>
                    <h1 className='font-bold text-lg md:text-xl'>Finter Shop</h1>
                </div>
                <div className='w-full md:w-[550px] dark:text-white text-sm bg-gray-300 text-black dark:bg-[#4c4c4c] rounded-lg flex items-center px-2 py-1 md:py-2'>
                    <input
                        type='text'
                        placeholder='Tìm kiếm sản phẩm...'
                        className='ml-2 flex-grow bg-transparent text-md outline-none placeholder-gray-500 dark:placeholder-gray-300'
                    />
                    <button className='cursor-pointer ml-3 text-black dark:text-white px-2 md:px-3 py-1 rounded'>
                        <i className="fas fa-search"></i>
                    </button>
                </div>
                <div>
                    <button className='bg-black text-white dark:text-black flex items-center gap-2 dark:bg-white dark:hover:bg-gray-300 hover:bg-gray-500 cursor-pointer px-4 py-2 md:py-2.5 mt-2 md:mt-0 rounded-lg'>
                        <i className="fas fa-shopping-cart text-md md:text-xl"></i>
                        <span className='text-sm tracking-widest'>Giỏ hàng</span>
                    </button>
                </div>
            </div>
        </header>
    )
}
export default Header