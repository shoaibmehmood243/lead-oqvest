import { Card } from 'primereact/card'
import { useState } from 'react';
import { homeOutline, refinance } from '../../assets';

const StepOne = ({formData, setFormData, step, setStep})=> {
    const [state, setState] = useState(formData.homeType)
    const data = [
        {
            name: 'Purchase',
            img: homeOutline
        },
        {
            name: 'Refinance',
            img: refinance
        }
    ]
    return (
        <div>
            <div className='w-5 m-auto text-center'>
                <h1 className='text-900 text-4xl my-5'>What type of loan do you need??</h1>
                <div className="grid max-w-full">
                    {
                        data.map((data, index)=> (
                            <div key={index} onClick={()=> {setState(data.name); setTimeout(()=> {setStep(step +1)}, 1000); setFormData({...formData, homeType: data.name})}} className={`col-6`}>
                                <Card className={`cursor-pointer py-3 ${state === data.name ? 'active' : 'text-900'}`}>
                                    <img src={data.img} />
                                    <h6 className='text-xl m-0 mt-2'>Home {data.name}</h6>
                                </Card>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default StepOne;