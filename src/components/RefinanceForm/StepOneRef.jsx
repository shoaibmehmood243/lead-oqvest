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
            <div className='w-12 md:w-11 lg:w-12 m-auto text-center'>
                <h1 className="text-900 text-2xl md:text-4xl mb-6">Great! What type of property are you refinancing?</h1>
                <div className="grid max-w-full m-auto w-full lg:w-full animate">
                    {
                        data.map((data, index)=> (
                            <div key={index} onClick={()=> {setState(data.name); setTimeout(()=> {setStep(step + 1)}, 0); setFormData({...formData, propertyType: data.name})}} className='col-12 md:col-6 lg:col-3'>
                                <Card className={`cursor-pointer ${state === data.name ? 'active' : 'text-900'}`}>
                                    <img height={50} src={data.img} />
                                    <p className='text-sm font-600 m-0 mt-3'>{data.name}</p>
                                </Card>
                            </div>
                        ))
                    }
                </div>
                <div className="mt-6 flex justify-content-center">
                    <Button onClick={()=> {setStep(step-1); setFormData({...formData, homeType: ''})}} label="Back" className="px-6" outlined />
                </div>
            </div>
        </div>
    )
}

export default StepOneRef;