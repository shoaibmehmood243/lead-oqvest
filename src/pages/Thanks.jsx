import { Button } from "primereact/button";
import { useNavigate } from "react-router-dom";
import { thanks } from "../assets";

const Thanks = ()=> {
    const navigate = useNavigate()
    return (
        <div className="thanks">
            <div className="text-center">
                <img src={thanks} height={150} />
                <h1 className="m-0">Thanks!!</h1>
                <p className="mt-0">your reponse was submitted</p>
                <p className="mb-5">We have received your inquiry and one of our team <br></br> member will contact you shortly.</p>
                <Button label="back to Home Page" onClick={()=> navigate('/')} style={{color: '#E98862'}} className='surface-900 border-0' />
            </div>
        </div>
    )
}

export default Thanks;