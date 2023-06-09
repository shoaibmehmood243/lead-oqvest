import {Button} from 'primereact/button'
import { InputMask } from "primereact/inputmask";
import { useState } from 'react';
import {ProgressSpinner} from 'primereact/progressspinner'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
// const URL = 'https://lead-oqvest-api.vercel.app'
const URL = 'http://209.126.10.187:5001';
// const URL = 'http://localhost:3000'

const StepEighteenRef = ({formData, setFormData, step, setStep})=> {
    const [isClicked, setIsClicked] = useState(false);
    const navigate = useNavigate()
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            setIsClicked(true);
            const phoneNumber = formData.number;
            const numericPhoneNumber = "+1" + phoneNumber.replace(/\D/g, "");
            const data = {
                full_name: formData.name?.toString(),
                email: formData.email?.toString(),
                phone: numericPhoneNumber?.toString(),
                transaction: formData.homeType?.toString(),
                property_type: formData.propertyType?.toString(),
                credit_score: formData.creditScore?.toString(),
                property_usage: formData.propertyUsed?.toString(),
                home_value: formData.purchasePrice?.toString(),
                rate_type: formData.rateKind?.toString(),
                total_annual_income: formData.householdIncome?.toString(),
                employement_status: formData.employementStatus?.toString(),
                bankruptcy: formData.isBankkrupt?.toString(),
                income_proof: formData.incomeProof?.toString(),
                zipCode: formData.zipCode?.toString(),
                mortgage: formData.remainingMortage.toString(),
                interest_rate: formData.mortageInterestRate.toString(),
                second_mortgage: formData.isSecondMortage.toString(),
                add_cash: formData.additionalCash.toString(),
                fha_loan: formData.fhaLoan.toString(),
                purchasing_year: formData.purchaseYear.toString()
            }
            const res = await axios.post(URL + '/api/v1/submit/refinance', {...data});
            setIsClicked(false);
            if(res.data) {
                setTimeout(()=> {
                    navigate('/thank-you')
                }, 2000)
            }
        } catch (error) {
            setIsClicked(true)
            setIsClicked(false)
            throw new Error(error);
        }
    };
    return (
        <div>
            <div className='w-full md:w-11 m-auto text-center'>
                <h1 className="text-900 text-2xl md:text-4xl mb-6">What is your phone number ?</h1>
                <form onSubmit={handleSubmit}>
                    <div className=' animate'>
                        <InputMask mask="(999) 999-9999" value={formData.number} onChange={(e)=> setFormData({...formData, number: e.target.value})} type="text" className="p-inputtext-lg w-11 md:w-10 lg:w-8" placeholder="Enter your phone number" />
                    </div>
                    <div className="mt-6 flex align-items-center justify-content-center gap-4 submit-btn">
                        <Button type="button" onClick={()=> setStep(step-1)} label="Back" className="px-6" outlined />
                        <Button type="submit" disabled={formData.number ? false : true} label={isClicked ? <ProgressSpinner style={{height: '18px'}} strokeWidth="8" /> : 'Submit'} className="px-6" style={{background: '#0CBC8B'}} />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default StepEighteenRef;