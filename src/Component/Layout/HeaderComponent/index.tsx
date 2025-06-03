import { Link } from 'react-router-dom'
import logo from '../../../assets/logo.jpg'

import { useState } from 'react';

const Header: React.FC = () => {
    const [showMenu, setShowMenu] = useState(false);
    return (
        <header className="w-full flex flex-col justify-center items-center py-5 text-white gap-6 bg-black">
            <div className='flex md:flex-row justify-between items-center w-wcontainer md:w-full max-w-[1200px] '>
                <ul className='hidden md:flex items-center gap-2'>
                    <li className='border-r-1 border-gray-500 pr-4 text-sm'>
                        <Link to='/about' className='cursor-pointer hover:text-gray-400'>Giới thiệu</Link>
                    </li>
                    <li className='border-r-1 border-gray-500 px-4 text-sm'>
                        <Link to='/seller-channel' className='cursor-pointer hover:text-gray-400'>Kênh người bán</Link>
                    </li>
                    <li className='border-r-1 border-gray-500 px-4 text-sm'>
                        <Link to='/shop-information' className='cursor-pointer hover:text-gray-400'>Thông tin shop</Link>
                    </li>
                    <li className='pl-4 text-sm flex gap-3 items-center'>Kết nối
                        <Link to='https://www.facebook.com/profile.php?id=61575260197423&locale=vi_VN' className='cursor-pointer hover:text-gray-400 text-[18px]'>
                            <i className="fab fa-facebook"></i>
                        </Link>
                        <Link to='https://www.youtube.com/@phuonghuy_coder' className='cursor-pointer hover:text-gray-400 text-[18px]'>
                            <i className="fab fa-youtube"></i>
                        </Link>
                    </li>
                </ul>
                <div className="md:hidden relative inline-block text-left">
                    <button
                        onClick={() => setShowMenu(!showMenu)}
                        className="z-20 cursor-pointer relative"
                    >
                        <i className="fas fa-bars text-lg"></i>
                    </button>
                    {showMenu && (
                        <>
                            <div
                                className="fixed inset-0 bg-white/10 backdrop-blur-sm z-10"
                                onClick={() => setShowMenu(false)}
                            ></div>
                            <ul className="fixed left-[50%] transform -translate-x-1/2 pt-2 right-[50%] mt-3 bg-[#2e2e2e] rounded-md shadow-lg z-20 w-wcontainer">
                                <Link to="/about" onClick={() => setShowMenu(false)} >
                                    <li className="text-sm px-4 py-3 hover:bg-gray-600 cursor-pointer flex justify-between items-center">
                                        <span>Giới thiệu</span>
                                        <i className="fas fa-arrow-right opacity-45"></i>
                                    </li>
                                </Link>
                                <Link to="/seller-channel" onClick={() => setShowMenu(false)}>
                                    <li className="text-sm px-4 py-3 hover:bg-gray-600 cursor-pointer flex justify-between items-center">
                                        <span>Kênh người bán</span>
                                        <i className="fas fa-arrow-right opacity-45"></i>
                                    </li>
                                </Link>
                                <Link to="/shop-information" onClick={() => setShowMenu(false)}>
                                    <li className="text-sm px-4 py-3 hover:bg-gray-600 cursor-pointer flex justify-between items-center">
                                        <span>Thông tin shop</span>
                                        <i className="fas fa-arrow-right opacity-45"></i>
                                    </li>
                                </Link>
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
                <div className='w-full md:w-[550px] text-sm bg-[#4c4c4c] rounded-lg flex items-center px-2 py-1 md:py-2'>
                    <input
                        type='text'
                        placeholder='Tìm kiếm sản phẩm...'
                        className='ml-2 flex-grow bg-transparent text-md outline-none placeholder-gray-300'
                    />
                    <button className='cursor-pointer ml-3 text-white bg-sky-600 hover:bg-sky-700 px-3 md:px-4 py-1 rounded'>
                        <i className="fas fa-search"></i>
                    </button>
                </div>
                <div>
                    <button className='flex items-center gap-2 bg-sky-600 hover:bg-sky-700 cursor-pointer px-4 py-1.5 md:py-2 mt-2 md:mt-0 rounded-lg'>
                        <i className="fas fa-shopping-cart text-md md:text-xl"></i>
                        <span className='text-sm'>Giỏ hàng</span>
                    </button>
                </div>
            </div>
        </header>
    )
}
export default Header