import { useNavigate } from "react-router-dom";
import avatar from "../assets/icons/avatar.png"
import Yam from "../assets/icons/Yam.jpg"
function LandingPage() {
    const navigate = useNavigate();
    const gotodetail =() =>{
        navigate("/details");
    }
    return (
        <div className="text-center">
            <p className="font-mono text-2xl font-bold uppercase text-white">About Me</p>
            <div className="flex justify-center">
                <img src={Yam} alt="Yam" className="w-[30%] my-3 rounded-full p-6" />
            </div>
            <p className="text-md font-bont text-white mx-36">   มนุษย์ทุกคนต่างมีต้นกำเนิด การใช้ชีวิต การทำงาน การอยู่ร่วมกันในสังคม
                มีความแตกต่างกันมากมาย มีชีวิตที่หลายรูปแบบ บางคนกับการใช้ชีวิตนั้นมีความสุข มีรอยยิ้ม และบางคนก็ต่างมีความทุกข์จากการใช้ชีวิตในสังคม
                ทั้งนี้ล้วนเกิดจากตัวเราเอง ว่าการปฏิบัติตน การคิด การรู้สึกนึกคิดได้ ของเรานั้นมันเป็นสิ่งที่ดี หรือไม่ดีไหม  ดิฉันก็เป็นมนุษย์ส่วนหนึ่งที่มีการใช้ชีวิตแบบนั้น
                ทั้งสุขและทุกข์คลุกเคล้ากัน ความทรงจำต่างๆ ดิฉันของจะขอเล่าประวัติส่วนตัวของดิฉันไว้พอเป็นสังเขป</p>
            <button className="text-xl text-[#f5f5dc] underline" 
                    onClick={()=> gotodetail()}>
                    NEXT</button>
        </div>
    );
}

export default LandingPage;