import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import UserContext from "../contexts/UserContext";

function Login() {
    const [onMobile, setOnMobile] = useState(true)
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const { setUser } = useContext(UserContext);

    const validateInput = (val) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phoneRegex = /^[0-9]{10}$/;
        return emailRegex.test(val) || phoneRegex.test(val);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email.trim() === "") {
        setError("Please login using your Email ID/Mobile Number.");
        return; // Submit rok do
        }
        if (!validateInput(email.trim())) {
            setError("Please login using your Email ID/Mobile Number.");
            return;
        }
        setError("");
        return setUser(email);
    };

  return (
    <>
        <div className="sm:m-auto max-w-[1440px] w-full sm:pt-[12px] hidden sm:block">
            <div className="p-[20px_24px] leading-[31.92px] text-center w-full">
                <h3 className="block w-full text-[24px] p-[5px_0_20px] font-[700]">
                    Login
                </h3>
                <h4 className="block text-[18px] p-[0_0_22px] font-[700]">
                    Login with mobile to become a member
                </h4>
                <div className="p-[15px_0_0] w-[33vw] h-[80px] m-auto table relative">
                    <form onSubmit={handleSubmit}>
                        <div className="w-full m-0 relative">
                            <label htmlFor="username" id="username" className="absolute top-[3px] left-0 text-start p-[10px_0_5px] text-[14px] text-[#766767] font-[500] w-auto  pointer-events-none">Mobile Number / Email Id</label>

                            <input onChange={(e) => setEmail(e.target.value)} type="text" id="username"className="border-b border-[#8f8f8f] focus:outline-0 text-[14px] font-[400] w-full p-[10px_0_5px]"/>

                            <div className="text-[#dc2222] text-start text-[12px] leading-[14px] mt-[5px] p-[5px_0]">{error}</div>
                        </div>

                        <div className="leading-[18.62px] justify-start p-[0_0_20px_30px]">
                            <input type="checkbox" className={`float-left -ml-[30px] appearance-none outline-none cursor-pointer w-[20px] h-[20px] bg-white border rounded-full checked:bg-blue-500 checked:bg-[url(https://www.samsung.com/in/web/dist/img/icon-checked-white.f836399.svg)] checked:bg-center checked:bg-no-repeat checked:border-blue-500 checked:bg-[length:14px_14px] transition`}></input>
                            
                            <span className="w-full inline-block font-normal text-[12px] sm:text-[14px] leading-[18.62px] text-start">
                                {"I agree to receive personalized offers and updates"}
                                <br />
                                {"You can opt out anytime by visiting My Page"}
                            </span>
                        </div>

                        <p className="p-[25px_0] text-center font-[700] text-[1.11111vw] leading-[200%]">
                            <button type="submit" className="cursor-pointer h-[40px] w-[296px] border bg-black text-white rounded-[20px] text-[14px]">Login</button>
                        </p>

                        <p className="pb-[25px] text-center font-[700] text-[1.11111vw] leading-[200%]">
                            <button className="cursor-pointer h-[40px] w-[296px] border bg-[#2189ff] text-white rounded-[20px] text-[14px]">Login via Samsung Account</button>
                        </p>
                    </form>
                </div>
                <div></div>
                <p className="font-[400] text-[14px]">
                    {
                    "By logging-in, I consent and accept the Smart club Program and Enrollment "
                    }
                    <a
                    href="https://images.samsung.com/is/content/samsung/assets/in/microsite/smart-club/smartclub-terms-conditions.pdf?v=4"
                    target="_blank"
                    className="cursor-pointer text-[#20a2ff]"
                    >
                    {"Terms and Conditions "}
                    </a>
                    {"& "}
                    <Link to={""} className="cursor-pointer text-[#20a2ff]">
                        {"Privacy Policy"}
                    </Link>
                </p>
            </div>
        </div>

        {/* Mobile */}
        <div className={`max-w-[1440px] w-full h-fit fixed bg-white overflow-x-hidden overflow-y-auto m-[auto_auto_0] z-10 bottom-0 left-0 right-0 sm:hidden ${onMobile ? 'translate-y-0' : 'translate-y-full'}`}>
            <div className="p-[20px_24px] leading-[31.92px] text-center w-full">
                <h3 className="block w-full text-[24px] p-[5px_0_20px] font-[700]">
                    Login
                </h3>
                <h4 className="block text-[18px] p-[0_0_22px] font-[700]">
                    Login with mobile to become a member
                </h4>
                <div className="p-[15px_0_0] w-[33vw] h-[80px] m-auto table relative">
                    <form onSubmit={handleSubmit}>
                        <div className="w-full m-0 relative">
                            <label htmlFor="username" id="username" className="absolute top-[3px] left-0 text-start p-[10px_0_5px] text-[14px] text-[#766767] font-[500] w-auto  pointer-events-none">Mobile Number / Email Id</label>

                            <input onChange={(e) => setEmail(e.target.value)} type="text" id="username"className="border-b border-[#8f8f8f] focus:outline-0 text-[14px] font-[400] w-full p-[10px_0_5px]"/>

                            <div className="text-[#dc2222] text-start text-[12px] leading-[14px] mt-[5px] p-[5px_0]">{error}</div>
                        </div>

                        <div className="leading-[18.62px] justify-start p-[0_0_20px_30px]">
                            <input type="checkbox" className={`float-left -ml-[30px] appearance-none outline-none cursor-pointer w-[20px] h-[20px] bg-white border rounded-full checked:bg-blue-500 checked:bg-[url(https://www.samsung.com/in/web/dist/img/icon-checked-white.f836399.svg)] checked:bg-center checked:bg-no-repeat checked:border-blue-500 checked:bg-[length:14px_14px] transition`}></input>
                            
                            <span className="w-full inline-block font-normal text-[12px] sm:text-[14px] leading-[18.62px] text-start">
                                {"I agree to receive personalized offers and updates"}
                                <br />
                                {"You can opt out anytime by visiting My Page"}
                            </span>
                        </div>

                        <p className="p-[25px_0] text-center font-[700] text-[1.11111vw] leading-[200%]">
                            <button type="submit" className="cursor-pointer h-[40px] w-[296px] border bg-black text-white rounded-[20px] text-[14px]">Login</button>
                        </p>

                        <p className="pb-[25px] text-center font-[700] text-[1.11111vw] leading-[200%]">
                            <button className="cursor-pointer h-[40px] w-[296px] border bg-[#2189ff] text-white rounded-[20px] text-[14px]">Login via Samsung Account</button>
                        </p>
                    </form>
                </div>
                <div></div>
                <p className="font-[400] text-[14px]">
                    {
                    "By logging-in, I consent and accept the Smart club Program and Enrollment "
                    }
                    <a
                    href="https://images.samsung.com/is/content/samsung/assets/in/microsite/smart-club/smartclub-terms-conditions.pdf?v=4"
                    target="_blank"
                    className="cursor-pointer text-[#20a2ff]"
                    >
                    {"Terms and Conditions "}
                    </a>
                    {"& "}
                    <Link to={""} className="cursor-pointer text-[#20a2ff]">
                        {"Privacy Policy"}
                    </Link>
                </p>
            </div>
        </div>
        {onMobile && (
                <div
                    onClick={() => setOnMobile(false)}
                    className="fixed inset-0 bg-[rgba(0,0,0,0.6)] z-0"
                />
        )}
    </>
  );
}

export default Login;
