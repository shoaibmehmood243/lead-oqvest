import { Card } from 'primereact/card'
import { useState } from 'react';
import { adjustable, fixed, homeOutline, refinance } from '../../assets';
import {Button} from 'primereact/button'

const StepEightRef = ({formData, setFormData, step, setStep})=> {
    const [state, setState] = useState(formData.rateKind)
    const data = [
        {
            name: 'Adjustable',
            img: adjustable
        },
        {
            name: 'Fixed',
            img: fixed
        }
    ]
    return (
        <div>
            <div className='w-11 md:w-11 lg:w-full m-auto text-center'>
                <h1 className="text-900 text-4xl mb-6">What kind of rate do you prefer?</h1>
                <div className="grid max-w-full m-auto w-full lg:w-27rem animate">
                    {
                        data.map((data, index)=> (
                            <div key={index} onClick={()=> {setState(data.name); setTimeout(()=> {setStep(step +1)}, 0); setFormData({...formData, rateKind: data.name})}} className={`col-6`}>
                                <Card className={`cursor-pointer py-3 ${state === data.name ? 'active' : 'text-900'}`}>
                                    <img src={data.img} />
                                    <h6 className='text-xs font-semibold m-0 mt-3'>{data.name}</h6>
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

export default StepEightRef;