import logo from '../../../../assets/logo.jpg'

const Header: React.FC = () => {
    return (
        <header className="w-full flex justify-center items-center h-[100px] bg-black">
            <div className='flex justify-between items-center w-full max-w-[1200px] gap-5 text-white'>
                <div className="flex items-center gap-3 shrink-0">
                    <img className='rounded-full w-[50px] h-[50px] border-2' src={logo} alt=""></img>
                    <h1 className='font-bold text-xl'>Finter Shop</h1>
                </div>
                <div className='w-[550px] bg-[#4c4c4c] rounded-lg flex items-center px-2 py-2'>
                    <input
                        type='text'
                        placeholder='Tìm kiếm sản phẩm...'
                        className='ml-2 flex-grow bg-transparent text-md outline-none placeholder-gray-300'
                    />
                    <button className='cursor-pointer ml-3 text-white bg-sky-600 hover:bg-sky-700 px-4 py-1 rounded'>
                        <i className="fas fa-search"></i>
                    </button>
                </div>
                <div>
                    <button className='flex items-center gap-2 bg-sky-600 hover:bg-sky-700 cursor-pointer px-4 py-2 rounded-lg'>
                        <i className="fas fa-shopping-cart text-xl"></i>
                        <span>Giỏ hàng</span>
                    </button>
                </div>
            </div>
        </header>
    )
}
export default Header