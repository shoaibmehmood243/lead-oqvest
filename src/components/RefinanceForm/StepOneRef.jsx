import { useState } from "react";
import { building, manufactured, multiFamilyHome, singleFamily, townHome } from "../../assets";
import { Card } from 'primereact/card'
import {Button} from 'primereact/button'

const StepOneRef = ({formData, setFormData, step, setStep})=> {
    const [state, setState] = useState(formData.propertyType)
    const data = [
        {
            name: 'Single Family Home',
            img: singleFamily
        },
        {
            name: 'Condominium',
            img: building
        },
        {
            name: 'Townhome',
            img: townHome
        },
        {
            name: 'Multi-Family Home',
            img: multiFamilyHome
        }
    ]
    return (
        <div>
            <div className='w-8 m-auto text-center'>
                <h1 className="text-900 text-4xl mb-6">Great! What type of property are you refinancing?</h1>
                <div className="grid max-w-full">
                    {
                        data.map((data, index)=> (
                            <div key={index} onClick={()=> {setState(data.name); setTimeout(()=> {setStep(step + 1)}, 1000); setFormData({...formData, propertyType: data.name})}} className='col-3'>
                                <Card className={`cursor-pointer ${state === data.name ? 'active' : 'text-900'}`}>
                                    <img src={data.img} />
                                    <h6 className='text-xs m-0 mt-2'>{data.name}</h6>
                                </Card>
                            </div>
                        ))
                    }
                </div>
                <div className="mt-6">
                    <Button onClick={()=> {setStep(step-1); setFormData({...formData, homeType: ''})}} label="Back" className="px-6" outlined />
                </div>
            </div>
        </div>
    )
}

export default StepOneRef;