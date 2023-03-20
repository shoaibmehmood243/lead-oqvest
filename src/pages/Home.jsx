import { Card } from "primereact/card";
import { useState } from "react";
import { Navbar } from '../components/common'
import {ProgressBar} from 'primereact/progressbar'
import { homeOutline, refinance } from "../assets";
import StepEight from "../components/PurchaseForm/StepEight";
import StepEleven from "../components/PurchaseForm/StepEleven";
import StepFifteen from "../components/PurchaseForm/StepFifteen";
import StepFive from "../components/PurchaseForm/StepFive";
import StepFour from "../components/PurchaseForm/StepFour";
import StepFourteen from "../components/PurchaseForm/StepFourteen";
import StepNine from "../components/PurchaseForm/StepNine";
import StepSeven from "../components/PurchaseForm/StepSeven";
import StepSeventeen from "../components/PurchaseForm/StepSeventeen";
import StepSix from "../components/PurchaseForm/StepSix";
import StepSixteen from "../components/PurchaseForm/StepSixteen";
import StepTen from "../components/PurchaseForm/StepTen";
import StepThirteen from "../components/PurchaseForm/StepThirteen";
import StepThree from "../components/PurchaseForm/StepThree";
import StepTwelve from "../components/PurchaseForm/StepTwelve";
import StepTwo from "../components/PurchaseForm/StepTwo";
import StepZipCode from "../components/PurchaseForm/StepZipCode";
import StepEighteenRef from "../components/RefinanceForm/StepEighteenRef";
import StepEightRef from "../components/RefinanceForm/StepEightRef";
import StepElevenRef from "../components/RefinanceForm/StepElevenRef";
import StepFifteenRef from "../components/RefinanceForm/StepFifteenRef";
import StepFiveRef from "../components/RefinanceForm/StepFiveRef";
import StepFourRef from "../components/RefinanceForm/StepFourRef";
import StepFourteenRef from "../components/RefinanceForm/StepFourteenRef";
import StepNineRef from "../components/RefinanceForm/StepNineRef";
import StepOneRef from "../components/RefinanceForm/StepOneRef";
import StepSevenRef from "../components/RefinanceForm/StepSevenRef";
import StepSeventeenRef from "../components/RefinanceForm/StepSeventeenRef";
import StepSixRef from "../components/RefinanceForm/StepSixRef";
import StepSixteenRef from "../components/RefinanceForm/StepSixteenRef";
import StepTenRef from "../components/RefinanceForm/StepTenRef";
import StepThirteenRef from "../components/RefinanceForm/StepThirteenRef";
import StepThreeRef from "../components/RefinanceForm/StepThreeRef";
import StepTwelveRef from "../components/RefinanceForm/StepTwelveRef";
import StepTwoRef from "../components/RefinanceForm/StepTwoRef";
import StepZipCodeRef from "../components/RefinanceForm/StepZipCodeRef";

const Home = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        homeType: '',
        propertyType: '',
        creditScore: '',
        isFirstPurcase: '',
        currentSituation: '',
        propertyUsed: '',
        purchasePrice: 250000,
        downPayment: 20,
        rateKind: '',
        householdIncome: 250000,
        employementStatus: '',
        incomeProof: '',
        agentAssociated: '',
        monthlyincome: 3000,
        fhaLoan: '',
        zipCode: '',
        name: '',
        email: ''
    });

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    };

    const renderStep = () => {
        if(formData.homeType === 'Purchase') {
            switch (step) {
                // case 1:
                //     return <StepOne handleChange={handleChange} step={step} setStep={setStep} formData={formData} setFormData={setFormData} />;
                case 2:
                return <StepTwo handleChange={handleChange} step={step} setStep={setStep} formData={formData} setFormData={setFormData} />;
                case 3:
                    return <StepThree handleChange={handleChange} step={step} setStep={setStep} formData={formData} setFormData={setFormData} />;
                case 4:
                    return <StepFour handleChange={handleChange} step={step} setStep={setStep} formData={formData} setFormData={setFormData} />;
                case 5:
                    return <StepFive handleChange={handleChange} step={step} setStep={setStep} formData={formData} setFormData={setFormData} />;
                case 6:
                    return <StepSix handleChange={handleChange} step={step} setStep={setStep} formData={formData} setFormData={setFormData} />;
                case 7:
                    return <StepSeven handleChange={handleChange} step={step} setStep={setStep} formData={formData} setFormData={setFormData} />;
                case 8:
                    return <StepEight handleChange={handleChange} step={step} setStep={setStep} formData={formData} setFormData={setFormData} />;
                case 9:
                    return <StepNine handleChange={handleChange} step={step} setStep={setStep} formData={formData} setFormData={setFormData} />;
                case 10:
                    return <StepTen handleChange={handleChange} step={step} setStep={setStep} formData={formData} setFormData={setFormData} />;
                case 11:
                    return <StepEleven handleChange={handleChange} step={step} setStep={setStep} formData={formData} setFormData={setFormData} />;
                case 12:
                    return <StepTwelve handleChange={handleChange} step={step} setStep={setStep} formData={formData} setFormData={setFormData} />;
                case 13:
                    return <StepThirteen handleChange={handleChange} step={step} setStep={setStep} formData={formData} setFormData={setFormData} />;
                case 14:
                    return <StepFourteen handleChange={handleChange} step={step} setStep={setStep} formData={formData} setFormData={setFormData} />;
                case 15:
                    return <StepZipCode handleChange={handleChange} step={step} setStep={setStep} formData={formData} setFormData={setFormData} />;
                case 16:
                    return <StepFifteen handleChange={handleChange} step={step} setStep={setStep} formData={formData} setFormData={setFormData} />;
                case 17:
                    return <StepSixteen handleChange={handleChange} step={step} setStep={setStep} formData={formData} setFormData={setFormData} />;
                case 18:
                    return <StepSeventeen handleChange={handleChange} step={step} setStep={setStep} formData={formData} setFormData={setFormData} />;
                default:
                return null;
            } 
        } else if(formData.homeType === 'Refinance') {
            switch(step) {
                case 2:
                    return <StepOneRef handleChange={handleChange} step={step} setStep={setStep} formData={formData} setFormData={setFormData} />;
                case 3:
                    return <StepTwoRef handleChange={handleChange} step={step} setStep={setStep} formData={formData} setFormData={setFormData} />;
                case 4:
                    return <StepThreeRef handleChange={handleChange} step={step} setStep={setStep} formData={formData} setFormData={setFormData} />;
                case 5:
                    return <StepFourRef handleChange={handleChange} step={step} setStep={setStep} formData={formData} setFormData={setFormData} />;
                case 6:
                    return <StepFiveRef handleChange={handleChange} step={step} setStep={setStep} formData={formData} setFormData={setFormData} />;
                case 7:
                    return <StepSixRef handleChange={handleChange} step={step} setStep={setStep} formData={formData} setFormData={setFormData} />;
                case 8:
                    return <StepSevenRef handleChange={handleChange} step={step} setStep={setStep} formData={formData} setFormData={setFormData} />;
                case 9:
                    return <StepEightRef handleChange={handleChange} step={step} setStep={setStep} formData={formData} setFormData={setFormData} />;
                case 10:
                    return <StepNineRef handleChange={handleChange} step={step} setStep={setStep} formData={formData} setFormData={setFormData} />;
                case 11:
                    return <StepTenRef handleChange={handleChange} step={step} setStep={setStep} formData={formData} setFormData={setFormData} />;
                case 12:
                    return <StepElevenRef handleChange={handleChange} step={step} setStep={setStep} formData={formData} setFormData={setFormData} />;
                case 13:
                    return <StepTwelveRef handleChange={handleChange} step={step} setStep={setStep} formData={formData} setFormData={setFormData} />;
                case 14:
                    return <StepThirteenRef handleChange={handleChange} step={step} setStep={setStep} formData={formData} setFormData={setFormData} />;
                case 15:
                    return <StepFourteenRef handleChange={handleChange} step={step} setStep={setStep} formData={formData} setFormData={setFormData} />;
                case 16:
                    return <StepFifteenRef handleChange={handleChange} step={step} setStep={setStep} formData={formData} setFormData={setFormData} />;
                case 17:
                    return <StepZipCodeRef handleChange={handleChange} step={step} setStep={setStep} formData={formData} setFormData={setFormData} />;
                case 18:
                    return <StepSixteenRef handleChange={handleChange} step={step} setStep={setStep} formData={formData} setFormData={setFormData} />;
                case 19:
                    return <StepSeventeenRef handleChange={handleChange} step={step} setStep={setStep} formData={formData} setFormData={setFormData} />;
                case 20:
                    return <StepEighteenRef handleChange={handleChange} step={step} setStep={setStep} formData={formData} setFormData={setFormData} />;
                default:
                    return null
            }            
        }
      };
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
    return (<div className="bg-blue-50">
        <Navbar />
        <div className="steps">
            {
                step > 1 &&
                    <ProgressBar value={
                        step === 2 ? 5 : 
                        step === 3 ? 12 : 
                        step === 4 ? 18 : 
                        step === 5 ? 24 :
                        step === 6 ? 29 :
                        step === 7 ? 35 : 
                        step === 8 ? 41 :
                        step === 9 ? 47 :
                        step === 10 ? 53 :
                        step === 11 ? 59 :
                        step === 12 ? 65 :
                        step === 13 ? 71 :
                        step === 14 ? 76 :
                        step === 15 ? 82 :
                        step === 16 ? 88 :
                        step === 17 ? 94 : 100
                    } />
            }
            <div className="step-in">
            {
                formData.homeType === '' ? (
                    <div>
                        <div className='w-9 md:w-7 lg:w-5 m-auto text-center'>
                            <h1 className='text-900 text-4xl my-5'>What type of loan do you need??</h1>
                            <div className="grid max-w-full">
                                {
                                    data.map((data, index)=> (
                                        <div key={index} onClick={()=> {setState(data.name); setTimeout(()=> {setStep(step +1)}, 1000); setFormData({...formData, homeType: data.name})}} className={`col-12 md:col-6`}>
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
                ) : (
                    renderStep()
                )
            }
            </div>
        </div>
    </div>)
}

export default Home;