import { Link } from 'react-router-dom'
import { HEADER_CONTENT } from '../../Contents'
import { useState, useEffect } from 'react';

const Header: React.FC = () => {
    const [showMenu, setShowMenu] = useState<boolean>(false);
    // Change Theme
    const [theme, setTheme] = useState<'light' | 'dark'>(
        () => (localStorage.getItem('theme') as 'light' | 'dark') || 'light'
    )
    useEffect(() => {
        document.documentElement.classList.toggle('dark', theme === 'dark')
        localStorage.setItem('theme', theme)
    }, [theme])

    {/* Sharing theme mode */}
    interface Props {
        theme: 'light' | 'dark';
        setTheme: React.Dispatch<React.SetStateAction<'light' | 'dark'>>;
    }
    function ThemeToggleButton({ theme, setTheme }: Props) {
        return (
            <button
                className="text-black text-xl dark:text-white md:text-2xl cursor-pointer ml-4"
                onClick={() => setTheme(prev => (prev === 'light' ? 'dark' : 'light'))}
            >
                {theme === 'light' ? (
                    <i className="fas fa-moon"></i>   
                ) : (
                    <i className="fas fa-sun"></i>
                )}
            </button>
        );
    }
    return (
        <header className="w-full flex flex-col justify-center items-center pt-4 pb-10 md:pb-4 duration-300 transition-all text-black gap-10 md:gap-5 bg-white dark:bg-black dark:text-white border-b-1 border-gray-300 dark:border-gray-700 shadow-xl">
            <div className='flex md:flex-row justify-between items-center w-wcontainer md:w-full max-w-[1200px] '>
                <ul className='hidden md:flex items-center gap-5'>
                    {/* Desktop NavLinks */}
                    {HEADER_CONTENT.navLinks
                    .filter(item => item.path)
                    .map((item, index, arr) => {
                        return (
                        <li
                            key={index}
                            className={`pr-4 py-1 text-[14px] border-r border-gray-400 dark:border-gray-700 ${
                            index === arr.length - 1 ? 'border-none' : ''
                            }`}
                        >
                            <Link to={item.path!} className="cursor-pointer hover:text-gray-500 flex gap-2 items-center justify-between">
                                <i className={`${item.icon}`}></i>
                                <span>{item.title}</span>
                            </Link>
                        </li>
                        )
                    })}
                </ul>
                <div className="md:hidden relative text-left inline-block">
                    {/* Menu kích hoạt giao diện NavLinks mobile */}
                    <button onClick={() => setShowMenu(!showMenu)} className="z-20 cursor-pointer relative" >
                        <i className="fas fa-bars text-lg"></i>
                    </button>
                    {showMenu && (
                        <>
                            {/* Giao diện này làm mờ để nổi bật NavLinks mobile */}
                            <div
                                className="fixed inset-0 bg-white/10 backdrop-blur-md z-10 overflow-x-hidden"
                                onClick={() => setShowMenu(false)}
                            ></div>
                            {/* Mobile NavLinks */}
                            <ul className="fixed left-[50%] transform -translate-x-1/2 pt-2 pb-3 right-[50%] mt-3 bg-black text-white dark:bg-white dark:text-black rounded-md z-20 w-wcontainer">
                                {HEADER_CONTENT.navLinks.map((item, index) => (
                                    <Link
                                        key={index}
                                        to={item.path!} 
                                        onClick={() => setShowMenu(false)} 
                                        className="text-size-sm px-4 py-2 hover:bg-gray-600 cursor-pointer flex justify-between items-center"
                                    >
                                        <li className="btn !px-0 w-full cursor-pointer hover:text-gray-400">
                                            <div className='flex items-center gap-3'>
                                                <i className={`${item.icon} text-[17px]`}></i>
                                                <span>{item.title}</span>
                                            </div>
                                            <i className='fas fa-arrow-right'></i>
                                        </li>
                                    </Link>))
                                }
                            </ul>
                        </>
                    )}
                </div>
                <div className='flex gap-4 items-center'>
                    {/* <ThemeToggleButton theme={theme} setTheme={setTheme} /> */}
                    <ThemeToggleButton theme={theme} setTheme={setTheme} />
                    <div className='flex gap-2'>
                        <Link to={HEADER_CONTENT.login.path} className='cursor-pointer pr-1 md:pr-2 text-sm hover:text-gray-400'>{HEADER_CONTENT.login.text}</Link>
                        <div className='w-[1px] bg-gray-500 h-5'></div>
                        <Link to={HEADER_CONTENT.signup.path} className='cursor-pointer pl-1 md:pl-2 text-sm hover:text-gray-400'>{HEADER_CONTENT.signup.text}</Link>
                    </div>
                </div>
            </div>
            <div className='flex md:flex-row flex-col justify-center md:justify-between items-center w-wcontainer md:w-full max-w-[1200px] gap-3 md:gap-5'>
                <div className="flex items-center gap-2 md:gap-3 shrink-0 cursor-pointer">
                    <img className='rounded-full size-[45px] md:size-[50px]' src={HEADER_CONTENT.logo} alt=""></img>
                    <h1 className='title-h1'>{HEADER_CONTENT.title}</h1>
                </div>
                <div className='w-full md:w-[550px] dark:text-white duration-300 text-sm bg-input-white text-black dark:bg-input-black rounded-lg flex items-center px-2 py-1 md:py-2'>
                    <input
                        type='text'
                        placeholder={HEADER_CONTENT.searchPlaceholder}
                        className='ml-2 flex-grow bg-transparent text-md outline-none placeholder-gray-500 dark:placeholder-gray-300'
                    />
                    <button className='cursor-pointer ml-3 text-black dark:text-white px-2 md:px-3 py-1 rounded'>
                        <i className="fas fa-search"></i>
                    </button>
                </div>
                <div className='flex items-center gap-5 justify-between'>
                    
                    <button className='text-black cursor-pointer dark:text-white dark:hover:text-gray-400 hover:text-gray-500 mt-2 md:mt-0 transition-all'>
                        <i className="fas fa-shopping-cart text-md md:text-2xl"></i>
                    </button>
                </div>
            </div>
        </header>
    )
}
export default Header