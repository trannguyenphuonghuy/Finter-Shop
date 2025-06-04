import Login from "../auth/Login"
// import Signup from "../auth/Signup"

const FormLogins: React.FC = () => {
    return (
        <div>
            <div className="fixed inset-0 flex items-center justify-center bg-black ">
                <Login/>
            </div>
        </div>
    )
}
export default FormLogins