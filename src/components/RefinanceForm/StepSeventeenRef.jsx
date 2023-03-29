import { useEffect, useState } from "react";
import { InputText } from 'primereact/inputtext'
import {Button} from 'primereact/button'
import {Message} from 'primereact/message'

const StepSeventeenRef = ({formData, setFormData, step, setStep})=> {
    const [emailError, setEmailError] = useState('');

    const [isEmailValid, setIsEmailValid] = useState(false); // Add state for email validity

const validateEmail = (email) => { // Pass email value as parameter
  const regex = /\S+@\S+\.\S+/;
  if (!email || !regex.test(email)) { // Check for empty string or invalid email
    setEmailError('Please enter a valid email address.');
    setIsEmailValid(false);
  } else {
    setEmailError('');
    setIsEmailValid(true);
  }
};

useEffect(() => {
  if(formData.email?.length > 0) {

    validateEmail(formData.email); // Call validateEmail whenever the email value changes
  }
}, [formData.email]);
    return (
        <div>
            <div className='w-full md:w-11 m-auto text-center'>
                <h1 className="text-900 text-2xl md:text-4xl mb-6">What is your email address ?</h1>
                <form>
                <div className=' animate'>
                    <InputText value={formData.email} onChange={(e)=> setFormData({...formData, email: e.target.value})} type="text" className="p-inputtext-lg w-11 md:w-10 lg:w-8" placeholder="Enter your email here" />
                </div>
                <div className="text-center mt-3">
                {emailError && <Message severity="error" text={emailError} />}
                </div>
                <div className="mt-6 flex align-items-center justify-content-center gap-4">
                    <Button type="button" onClick={()=> setStep(step-1)} label="Back" className="px-6" outlined />
                    <Button type="submit" disabled={isEmailValid ? false : true} onClick={()=> setStep(step+1)} label="Continue" className="px-6 surface-900" />
                </div>
                </form>
            </div>
        </div>
    )
}

export default StepSeventeenRef;