import { useState } from "react";
import { Slider } from 'primereact/slider'
import {Button} from 'primereact/button';
import { InputNumber } from 'primereact/inputnumber'
const formatPrice = (value) => {
      return `${value}`;
  };

const StepSixRef = ({formData, setFormData, step, setStep})=> {
    const [priceRange, setPriceRange] = useState(formData.mortageInterestRate);
    const [inputValue, setInputValue] = useState(formatPrice(priceRange));

    const handleSlide = (event) => {
        const value = event.value;
        setInputValue(formatPrice(value));
        setPriceRange(value);
        setFormData({...formData, mortageInterestRate: value})
    };

    const handleInputChange = (event) => {
        const value = event.value;
        setInputValue(value);
        if (Number(value)) {
            const price = parseInt(value);
            if(price > 50) {
                setPriceRange(50);
                setFormData({...formData, mortageInterestRate: 50})
            } else if(price === 25) {
                setPriceRange(25);
                setFormData({...formData, mortageInterestRate: 25})
            } else {
                setPriceRange(price);
                setFormData({...formData, mortageInterestRate: price})
            }
        }
    };

    return (
        <div>
            <div className='w-full md:w-11 lg:w-11 m-auto text-center'>
                <h1 className="text-900 text-2xl md:text-4xl mb-6">What is your 1st mortgage interest rate?</h1>
                <div className="w-11 md:w-11 lg:w-11 m-auto animate">
                    <div className="w-11 md:w-8 flex justify-content-center align-items-center m-auto slides-main">
                        <div className="slider-labels">$</div>
                        <InputNumber min={25} max={50} value={inputValue} onChange={(e)=>handleInputChange(e)} />
                    </div>
                    <Slider
                        value={priceRange}
                        step={1}
                        min={25}
                        max={50}
                        onChange={handleSlide}
                        className='mt-4'
                    />
                     <div className="flex align-items-center justify-content-between mt-3 ranges">
                        <span>25%</span>
                        <span>50%</span>
                    </div>
                </div>
                <div className="mt-6 flex align-items-center justify-content-center gap-4">
                    <Button onClick={()=> setStep(step-1)} label="Back" className="px-6" outlined />
                    <Button onClick={()=> setStep(step+1)} label="Continue" className="px-6 surface-900" />
                </div>
            </div>
        </div>
    )
}

export default StepSixRef;
