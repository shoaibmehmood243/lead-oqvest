import { InputMask } from 'primereact/inputmask'
import {Button} from 'primereact/button'

const StepZipCode = ({formData, setFormData, step, setStep})=> {
    return (
        <div>
            <div className='w-8 m-auto text-center'>
                <h1 className="text-900 text-4xl mb-6">What is your Zip code ?</h1>
                <form>
                <div>
                    <InputMask value={formData.zipCode} mask="99999" onChange={(e)=> setFormData({...formData, zipCode: e.target.value})} type="text" className="p-inputtext-lg w-10 md:w-8 lg:w-6" placeholder="Enter your Zip Code here" />
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

export default StepZipCode;