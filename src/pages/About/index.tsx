import { useNavigate } from "react-router-dom";

const About: React.FC = () => {
  const navigate = useNavigate()
  function back() {
    navigate('/')
  }
  return (
    <>
      <div className="w-full">
        <button className="w-[40px] h-[40px] bg-transparent rounded-full hover:bg-gray-200 text-xl cursor-pointer transition-all" onClick={back}>
          <i className="fas fa-arrow-left"></i>
        </button>
      </div>
      <div className="mt-4">
        <div className="bg-red-200">
          <div className="flex justify-between items-center">
            <h2>Giới thiệu</h2>
            <a href="/">Tìm hiểu thêm</a>
          </div>
        </div>
      </div>
    </>
  )
}
export default About;