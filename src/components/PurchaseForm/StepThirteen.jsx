import { useState } from "react";
import { cross, tick } from "../../assets";
import { Card } from 'primereact/card'
import {Button} from 'primereact/button'

const StepThirteen = ({formData, setFormData, step, setStep})=> {
    const [state, setState] = useState(formData.incomeProof)
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
            <div className='w-full md:w-12 lg:w-12 m-auto text-center'>
                <h1 className="text-900 text-4xl mb-6">Can you show proof of income??</h1>
                <div className="grid max-w-full m-auto w-full lg:w-28rem">
                    {
                        data.map((data, index)=> (
                            <div key={index} onClick={()=> {setState(data.name); setTimeout(()=> {setStep(step + 1)}, 500); setFormData({...formData, incomeProof: data.name})}} className='col-6'>
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

export default StepThirteen;