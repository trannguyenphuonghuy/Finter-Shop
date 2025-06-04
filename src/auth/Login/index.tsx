// import { Link } from 'react-router-dom'

const Login: React.FC = () => {
    return (
        <>
            <div className="flex flex-col w-wcontainer md:w-full max-w-[400px] text-white">
                <div className='mb-5'>
                    <h1 className="title-h1 !text-2xl">Đăng nhập</h1>
                    <p className="text-sm/6 mt-3 opacity-75">Đã đến với FINTER SHOP của chúng tôi. Chúng tôi đang phát triển...</p>
                </div>
                <div className="flex flex-col gap-3">
                    <input className="text-sm w-full px-3 py-3 outline-none  border-gray-700 border rounded" type="text" placeholder="Tên đăng nhập..." />
                    <input className="text-sm w-full px-3 py-3 outline-none  border-gray-700 border rounded" type="password" placeholder="Mật khẩu..." />
                </div>
                <button className="text-sm cursor-no-drop py-3 w-full bg-sky-800 mt-8 rounded">Đăng nhập</button>
            </div>
        </>
    )
}
export default Login