import { useState } from "react";
import { faceSmile1, faceSmile2, faceSmile3, sad1, sad2 } from "../../assets";
import { Card } from 'primereact/card'
import {Button} from 'primereact/button'

const StepThreeRef = ({formData, setFormData, step, setStep})=> {
    const [state, setState] = useState(formData.purchaseYear)
    const data = [
        {
            name: '2010-2023',
            img: faceSmile1
        },
        {
            name: '2000-2009',
            img: faceSmile2
        },
        {
            name: '1990-1999',
            img: faceSmile3
        },
        {
            name: 'Before 1990',
            img: sad1
        }
    ]
    return (
        <div>
            <div className='w-12 md:w-10 lg:w-8 m-auto text-center'>
                <h1 className="text-900 text-4xl mb-6">What year did you purchase your home?</h1>
                <div className="grid max-w-full">
                    {
                        data.map((data, index)=> (
                            <div className="col-6 md:col-6 lg:col-3" key={index} onClick={()=> {setState(data.name); setTimeout(()=> {setStep(step + 1)}, 1000); setFormData({...formData, purchaseYear: data.name})}}>
                                <Card className={`cursor-pointer ${state === data.name ? 'active' : 'text-900'}`}>
                                    <img src={data.img} />
                                    <h6 className='text-xs m-0 mt-2'>{data.name}</h6>
                                </Card>
                            </div>
                        ))
                    }
                </div>
                <div className="mt-6 flex justify-content-center">
                    <Button onClick={()=> setStep(step-1)} label="Back" className="px-6" outlined />
                </div>
            </div>
        </div>
    )
}

export default StepThreeRef;