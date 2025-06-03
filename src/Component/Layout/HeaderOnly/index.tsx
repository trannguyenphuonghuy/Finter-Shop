import Header from "../HeaderComponent"

const DefaultLayout: React.FC<{children: React.ReactNode}> = ({children}) => {
    return (
        <>
            <Header/>
            <main className="w-full flex justify-center items-center ">
                <div className="w-wcontainer md:w-full max-w-[1200px] flex justify-between items-start mt-5">
                    <div className="w-full">{children}</div>
                </div>
            </main>
        </>
    )
}
export default DefaultLayout