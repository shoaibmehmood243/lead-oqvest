import { useState } from "react";
import { buying, faceSmile1, faceSmile2, faceSmile3, pending, researching, sad1, sad2, signed } from "../../assets";
import { Card } from 'primereact/card'
import {Button} from 'primereact/button'

const StepFive = ({formData, setFormData, step, setStep})=> {
    const [state, setState] = useState(formData.currentSituation)
    const data = [
        {
            name: 'Signed a Purchase Agreement',
            img: signed
        },
        {
            name: 'Offer Pending / Found Property',
            img: pending
        },
        {
            name: 'Buying in 2-6 Months',
            img: buying
        },
        {
            name: 'Researching Options',
            img: researching
        }
    ]
    return (
        <div>
            <div className='w-10 md:w-8 lg:w-12 m-auto text-center'>
                <h1 className="text-900 text-4xl mb-6">What is your current property purchase situation?</h1>
                <div className="grid max-w-full m-auto lg:w-11">
                    {
                        data.map((data, index)=> (
                            <div key={index} onClick={()=> {setState(data.name); setTimeout(()=> {setStep(step + 1)}, 1000); setFormData({...formData, currentSituation: data.name})}} className='col-6 lg:col-3'>
                                <Card className={`cursor-pointer ${state === data.name ? 'active' : 'text-900'}`}>
                                    <img src={data.img} />
                                    <h6 className='text-xs m-0 mt-2'>{data.name}</h6>
                                </Card>
                            </div>
                        ))
                    }
                </div>
                <div className="mt-6 flex align-items-center justify-content-center">
                    <Button onClick={()=> setStep(step-1)} label="Back" className="px-6" outlined />
                </div>
            </div>
        </div>
    )
}

export default StepFive;