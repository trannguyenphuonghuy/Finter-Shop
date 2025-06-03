import { useNavigate } from "react-router-dom";

const Seller_channel: React.FC = () => {
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
    </>
  )
}
export default Seller_channel;