import { useState } from "react";
import { primary, rental, secondary } from "../../assets";
import { Card } from 'primereact/card'
import {Button} from 'primereact/button'

const StepSevenRef = ({formData, setFormData, step, setStep})=> {
    const [state, setState] = useState(formData.propertyUsed)
    const data = [
        {
            name: 'Primary Home',
            img: primary
        },
        {
            name: 'Secondary Home',
            img: secondary
        },
        {
            name: 'Rental Property',
            img: rental
        }
    ]
    return (
        <div>
            <div className='w-8 md:w-8 lg:w-6 m-auto text-center'>
                <h1 className="text-900 text-4xl mb-6">How will this property be used??</h1>
                <div className="grid max-w-full m-auto w-full lg:w-10">
                    {
                        data.map((data, index)=> (
                            <div key={index} onClick={()=> {setState(data.name); setTimeout(()=> {setStep(step + 1)}, 1000); setFormData({...formData, propertyUsed: data.name})}} className='col-12 md:col-6 lg:col-4'>
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

export default StepSevenRef;