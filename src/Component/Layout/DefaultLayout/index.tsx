import Footer from "../FooterComponent"
import Header from "../HeaderComponent"
import Sidebar from "./Sidebar"

const DefaultLayout: React.FC<{children: React.ReactNode}> = ({children}) => {
    return (
        <>
            <Header/>
            <main className="flex justify-center items-center">
                <div className="w-wcontainer md:w-full max-w-[1200px] flex justify-center flex-col md:flex-row md:gap-3 gap-4 md:justify-between items-start mt-5 md:mt-6">
                    <Sidebar/>
                    <div className="w-full">{children}</div>
                </div>
            </main>
            <Footer/>
        </>
    )
}
export default DefaultLayout