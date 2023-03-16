import { useState } from "react";
import StepEight from "../components/PurchaseForm/StepEight";
import StepEleven from "../components/PurchaseForm/StepEleven";
import StepFifteen from "../components/PurchaseForm/StepFifteen";
import StepFive from "../components/PurchaseForm/StepFive";
import StepFour from "../components/PurchaseForm/StepFour";
import StepFourteen from "../components/PurchaseForm/StepFourteen";
import StepNine from "../components/PurchaseForm/StepNine";
import StepOne from "../components/PurchaseForm/StepOne";
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
        zipCode: '',
        name: '',
        email: ''
    });

    const handleNext = () => {
        setStep(step + 1);
    };

    const handlePrevious = () => {
        setStep(step - 1);
    };

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
        // TODO: save form data to database or API
    };

    const renderStep = () => {
        switch (step) {
            case 1:
                return <StepOne handleChange={handleChange} step={step} setStep={setStep} formData={formData} setFormData={setFormData} />;
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
      };
    return (
        <div className="steps">
            <div className="step-in">
            {renderStep()}
            </div>
        </div>
    )
}

export default Home;