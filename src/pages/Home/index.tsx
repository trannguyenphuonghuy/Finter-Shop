const Home: React.FC = () => {
  return (
    <>
      <div className="w-full bg-gradient-to-l dark:bg-gradient-to-r from-red-500 to-blue-500 px-5 py-15 md:py-20 rounded-xl ">
        <div className="text-center flex items-center flex-col">
          <h1 className="text-white text-xl md:text-3xl font-bold md:font-black">CHÀO MỪNG</h1>   
          <p className="text-white text-md w-[100%] md:w-[60%] mt-2">Đã đến với FINTER SHOP của chúng tôi. Tại đây, bạn có thể đặt hàng mua sắm thoải thích. Gía rất chi là hợp lý. Mua ngay kẻo hết bây giờ!</p>
        </div>   
      </div>
    </>
  )
}
export default Home;