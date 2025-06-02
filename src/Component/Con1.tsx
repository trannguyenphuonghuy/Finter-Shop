type prop = {
  han: () => void,
  noice: boolean
}

const Con1: React.FC <prop> = ({han, noice}) => {
  return (
    <>
      <h1>Con số 1</h1>
        {!noice && (
        <div className="top-0 bg-opacity-20 left-0 w-screen transition-color h-screen fixed bg-black bg-opacity-50 flex items-center z-30 justify-center">
          <div className="w-full max-w-[500px] rounded-2xl bg-[#2c2c2c]">
            <div className="text-center border-b rounded-t-2xl p-4">
              <h1 className="font-bold text-md">Thông báo</h1>
            </div>
            <div className="p-4">
              <button onClick={han}>Đóng</button>
            </div>
            <div className="container">
              <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
          </div>
        </div>
      )}
      <button onClick={han}>Mở</button> 
    </>
  )
}
export default Con1;