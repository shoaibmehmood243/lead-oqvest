import { Button } from "primereact/button";
import { useNavigate } from "react-router-dom";
import { thanks } from "../assets";

const Thanks = ()=> {
    const navigate = useNavigate();
    const phoneNumber = '+551 225 0733';
    const handleButtonClick = () => {
        window.location.href = `tel:${phoneNumber}`;
      }
    return (
        <div className="thanks">
            <div className="text-center w-11 md:w-8 lg:w-6 m-auto">
                <img src={thanks} height={150} />
                <h1 className="m-0">Thanks!!</h1>
                <p className="mt-0">Thank you for your submission! Our team of experts will evaluate your request and send you a personalized quote shortly. Stay tuned!</p>
                <h6 className="mb-5 mt-0 text-xl">Market is full of myths. Book a free consultation call with our mortgage experts to have straight journey.</h6>
                <div className="flex gap-4 flex-column md:flex-row justify-content-center">
                    <Button label="Book a Free Consultation Call" onClick={handleButtonClick} className='surface-900 border-1 border-900' />
                    <Button label="Back to Home Page" onClick={()=> navigate('/')} style={{background: 'transparent'}} className='border-1 border-900 text-900' />
                </div>
            </div>
        </div>
    )
}

export default Thanks;