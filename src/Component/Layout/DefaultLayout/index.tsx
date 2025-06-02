import Header from "./Header"
import Sidebar from "./Sidebar"

const DefaultLayout: React.FC<{children: React.ReactNode}> = ({children}) => {
    return (
        <>
            <Header/>
            <main className="w-full flex justify-center items-center ">
                <div className="w-full max-w-[1200px] flex justify-between items-start mt-5 border">
                    <Sidebar/>
                    <div>{children}</div>
                </div>
            </main>
        </>
    )
}
export default DefaultLayout