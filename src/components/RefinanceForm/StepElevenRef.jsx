import { useState } from "react";
import { employed, faceSmile1, faceSmile2, faceSmile3, military, notEmployed, other, sad1, sad2, selfEmployed } from "../../assets";
import { Card } from 'primereact/card'
import {Button} from 'primereact/button'

const StepElevenRef = ({formData, setFormData, step, setStep})=> {
    const [state, setState] = useState(formData.employementStatus)
    const data = [
        {
            name: 'Employed',
            img: employed
        },
        {
            name: 'Not Employed',
            img: notEmployed
        },
        {
            name: 'Self Employed',
            img: selfEmployed
        },
        {
            name: 'Military',
            img: military
        },
        {
            name: 'Other',
            img: other
        }
    ]
    return (
        <div>
            <div className='w-8 m-auto text-center'>
                <h1 className="text-900 text-4xl mb-6">What is your employment status?</h1>
                <div className="grid-app gap-4 max-w-full">
                    {
                        data.map((data, index)=> (
                            <div key={index} onClick={()=> {setState(data.name); setTimeout(()=> {setStep(step + 1)}, 500); setFormData({...formData, employementStatus: data.name})}}>
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

export default StepElevenRef;