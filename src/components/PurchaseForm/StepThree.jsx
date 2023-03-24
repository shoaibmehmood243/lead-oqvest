import { useState } from "react";
import { faceSmile1, faceSmile2, faceSmile3, sad1, sad2 } from "../../assets";
import { Card } from 'primereact/card'
import {Button} from 'primereact/button'

const StepThree = ({formData, setFormData, step, setStep})=> {
    const [state, setState] = useState(formData.creditScore)
    const data = [
        {
            name: 'Excellent 740+',
            img: faceSmile1
        },
        {
            name: 'Good 700-739',
            img: faceSmile2
        },
        {
            name: 'Fair 600-659',
            img: sad2
        },
        {
            name: 'Poor < 600',
            img: sad1
        }
    ]
    return (
        <div>
            <div className='w-8 m-auto text-center'>
                <h1 className="text-900 text-4xl mb-6">Estimate your credit score:</h1>
                <div className="grid-app gap-5 max-w-full animate">
                    {
                        data.map((data, index)=> (
                            <div key={index} onClick={()=> {setState(data.name); setTimeout(()=> {setStep(step + 1)}, 0); setFormData({...formData, creditScore: data.name})}}>
                                <Card className={`cursor-pointer ${state === data.name ? 'active' : 'text-900'}`}>
                                    <img src={data.img} />
                                    <h6 className='text-xs m-0 mt-3'>{data.name}</h6>
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

export default StepThree;