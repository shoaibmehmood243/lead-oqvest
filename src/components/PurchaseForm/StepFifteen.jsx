import { useState } from "react";
import { InputText } from 'primereact/inputtext'
import {Button} from 'primereact/button'

const StepFifteen = ({formData, setFormData, step, setStep})=> {
    return (
        <div>
            <div className='w-full md:w-11 m-auto text-center'>
                <h1 className="text-900 text-4xl mb-6">What is your full name?</h1>
                <form>
                <div className=" animate">
                    <InputText value={formData.name} onChange={(e)=> setFormData({...formData, name: e.target.value})} type="text" className="p-inputtext-lg w-10 md:w-8 lg:w-10" placeholder="Enter your name here" />
                </div>
                <div className="mt-6 flex align-items-center justify-content-center gap-4">
                    <Button type="button" onClick={()=> setStep(step-1)} label="Back" className="px-6" outlined />
                    <Button type="submit" disabled={formData.name ? false : true} onClick={()=> setStep(step+1)} label="Continue" className="px-6 surface-900" />
                </div>
                </form>
            </div>
        </div>
    )
}

export default StepFifteen;