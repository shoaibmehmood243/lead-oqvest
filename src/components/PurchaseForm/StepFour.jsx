import { useState } from "react";
import { cross, tick } from "../../assets";
import { Card } from 'primereact/card'
import {Button} from 'primereact/button'

const StepFour = ({formData, setFormData, step, setStep})=> {
    const [state, setState] = useState(formData.isFirstPurcase)
    const data = [
        {
            name: 'Yes',
            img: tick
        },
        {
            name: 'No',
            img: cross
        }
    ]
    return (
        <div>
            <div className='w-full md:w-11 lg:w-12 m-auto text-center'>
                <h1 className="text-900 text-4xl mb-6">Is this your first property purchase??</h1>
                <div className="grid max-w-full w-full m-auto lg:w-27rem animate">
                    {
                        data.map((data, index)=> (
                            <div key={index} onClick={()=> {setState(data.name); setTimeout(()=> {setStep(step + 1)}, 0); setFormData({...formData, isFirstPurcase: data.name})}} className='col-6'>
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

export default StepFour;