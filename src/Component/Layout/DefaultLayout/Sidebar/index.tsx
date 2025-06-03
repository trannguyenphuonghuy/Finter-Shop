const Sidebar: React.FC = () => {
    return (
        <>
            <aside className="hidden lg:block border-r-1 w-full md:w-1/4">
                <div className="pb-10 pr-2">
                    <h2 className="font-bold mb-2">Điện tử</h2>
                    <ul className="flex flex-col gap-2">
                        <li className="pl-2 rounded cursor-pointer py-2 border-b border-gray-300 hover:bg-gray-200">èwefw</li>
                        <li className="rounded cursor-pointer py-2 border-b border-gray-300 hover:bg-gray-200">èwefw</li>
                        <li className="rounded cursor-pointer py-2 border-b border-gray-300 hover:bg-gray-200">èwefw</li>
                        <li className="rounded cursor-pointer py-2 border-b border-gray-300 hover:bg-gray-200">èwefw</li>
                    </ul>
                </div>
                <div className="pb-10">
                    <h2>Điện tử</h2>
                    <ul>
                        <li>èwefw</li>
                        <li>ewfwf</li>
                        <li>ew</li>
                        <li>ewfwef</li>
                    </ul>
                </div>
                            <div className="pb-10">
                    <h2>Điện tử</h2>
                    <ul>
                        <li>èwefw</li>
                        <li>ewfwf</li>
                        <li>ew</li>
                        <li>ewfwef</li>
                    </ul>
                </div>
                            <div className="pb-10">
                    <h2>Điện tử</h2>
                    <ul>
                        <li>èwefw</li>
                        <li>ewfwf</li>
                        <li>ew</li>
                        <li>ewfwef</li>
                    </ul>
                </div>
            </aside>
            <aside className="md:hidden w-full md:w-1/4 border-b-1 border-gray-400 pb-5">
                <div className="mb-3">
                    <h2 className="font-bold">Danh mục sản phẩm</h2>
                </div>
                <div className="grid grid-cols-5 gap-2">
                    <button className="rounded px-5 py-3 bg-gray-300">clcik</button>
                    <button className="rounded px-5 py-3 bg-gray-300">clcik</button>
                    <button className="rounded px-5 py-3 bg-gray-300">clcik</button>
                    <button className="rounded px-5 py-3 bg-gray-300">clcik</button>
                    <button className="rounded px-5 py-3 bg-gray-300">clcik</button>
                    <button className="rounded px-5 py-3 bg-gray-300">clcik</button>
                    <button className="rounded px-5 py-3 bg-gray-300">clcik</button>
                    <button className="rounded px-5 py-3 bg-gray-300">clcik</button>
                </div>
            </aside>
        </>
    )
}
export default Sidebar