import { InputMask } from 'primereact/inputmask'
import {Button} from 'primereact/button'

const StepZipCodeRef = ({formData, setFormData, step, setStep})=> {
    return (
        <div>
            <div className='w-full lg:w-10 m-auto text-center'>
                <h1 className="text-900 text-4xl mb-6">What is your Zip Code?</h1>
                <form>
                <div className=' animate'>
                    <InputMask value={formData.zipCode} mask="99999" onChange={(e)=> setFormData({...formData, zipCode: e.target.value})} type="text" className="p-inputtext-lg w-11 md:w-10 lg:w-8" placeholder="Enter your Zip Code here" />
                </div>
                <div className="mt-6 flex align-items-center justify-content-center gap-4">
                    <Button type='button' onClick={()=> setStep(step-1)} label="Back" className="px-6" outlined />
                    <Button type='submit' disabled={formData.zipCode ? false : true} onClick={()=> setStep(step+1)} label="Continue" className="px-6 surface-900" />
                </div>
                </form>
            </div>
        </div>
    )
}

export default StepZipCodeRef;