import { useState } from "react";
import { building, manufactured, multiFamilyHome, singleFamily, townHome } from "../../assets";
import { Card } from 'primereact/card'
import {Button} from 'primereact/button'

const StepTwo = ({formData, setFormData, step, setStep})=> {
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
        },
        {
            name: 'Manufactured or Mobile Home',
            img: manufactured
        }
    ]
    return (
        <div>
            <div className='w-full md:w-11 lg:w-10 m-auto text-center'>
                <h1 className="text-900 text-4xl mb-6">Great! What type of property are you purchasing?</h1>
                <div className="grid-app gap-5 max-w-full animate">
                    {
                        data.map((data, index)=> (
                            <div key={index} onClick={()=> {setState(data.name); setTimeout(()=> {setStep(step + 1)}, 0); setFormData({...formData, propertyType: data.name})}}>
                                <Card className={`cursor-pointer ${state === data.name ? 'active' : 'text-900'}`}>
                                    <img height={46} src={data.img} />
                                    <p className='text-sm font-600 m-0 mt-3'>{data.name}</p>
                                </Card>
                            </div>
                        ))
                    }
                </div>
                <div className="mt-6 flex align-items-center justify-content-center">
                    <Button onClick={()=> {setStep(step-1); setFormData({...formData, homeType: ''})}} label="Back" className="px-6" outlined />
                </div>
            </div>
        </div>
    )
}

export default StepTwo;