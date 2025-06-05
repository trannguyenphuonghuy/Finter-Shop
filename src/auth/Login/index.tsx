import { LOGIN_CONTENT } from '../../Component/Contents'

const Login: React.FC = () => {
    return (
        <>
            <div className="flex flex-col w-wcontainer md:w-full max-w-[400px] dark:text-white">
                <div className='mb-5'>
                    <h1 className="title-h1 !text-2xl">{LOGIN_CONTENT.title}</h1>
                    <p className="text-sm/6 mt-3 opacity-75">{LOGIN_CONTENT.description}</p>
                </div>
                <div className="flex flex-col gap-3">
                    <input className="text-sm w-full px-3 py-3 outline-none  border-gray-700 border rounded " type="text" placeholder={LOGIN_CONTENT.usernamePlaceholder} />
                    <input className="text-sm w-full px-3 py-3 outline-none  border-gray-700 border rounded" type="password" placeholder={LOGIN_CONTENT.passwordPlaceholder} />
                </div>
                <button className="text-sm cursor-no-drop py-3 text-white dark:text-black bg-black w-full dark:bg-white mt-8 rounded">{LOGIN_CONTENT.loginButton}</button>
            </div>
        </>
    )
}
export default Login