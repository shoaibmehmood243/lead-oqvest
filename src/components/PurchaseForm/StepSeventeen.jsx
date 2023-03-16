import {Button} from 'primereact/button'
import { InputMask } from "primereact/inputmask";

const StepSeventeen = ({formData, setFormData, step, setStep})=> {
    return (
        <div>
            <div className='w-8 m-auto text-center'>
                <h1 className="text-900 text-4xl mb-6">What is your phone number ?</h1>
                <form>
                <div>
                    <InputMask mask="(999) 999-9999" value={formData.number} onChange={(e)=> setFormData({...formData, number: e.target.value})} type="text" className="p-inputtext-lg w-6" placeholder="Enter yourphone number" />
                </div>
                <div className="mt-6 flex align-items-center justify-content-center gap-4">
                    <Button type="button" onClick={()=> setStep(step-1)} label="Back" className="px-6" outlined />
                    <Button type="submit" disabled={formData.number ? false : true} onClick={()=> setStep(step+1)} label="Submit" className="px-6 surface-900" />
                </div>
                </form>
            </div>
        </div>
    )
}

export default StepSeventeen;