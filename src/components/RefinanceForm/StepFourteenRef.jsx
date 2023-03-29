import { useState } from "react";
import { Slider } from 'primereact/slider'
import {Button} from 'primereact/button';
import { InputNumber } from 'primereact/inputnumber'
const formatPrice = (value) => {
      return `${value}`;
  };

const StepFourteenRef = ({formData, setFormData, step, setStep})=> {
    const [priceRange, setPriceRange] = useState(formData.monthlyincome);
    const [inputValue, setInputValue] = useState(formatPrice(priceRange));

    const handleSlide = (event) => {
        const value = event.value;
        setInputValue(formatPrice(value));
        setPriceRange(value);
        setFormData({...formData, monthlyincome: value})
    };
    
    const handleInputChange = (event) => {
        const value = event.value;
        setInputValue(value);
        if (Number(value)) {
            const price = parseInt(value);
            if(price > 50000) {
                setPriceRange(50000);
                setFormData({...formData, monthlyincome: 50000})
            } else if(price === 0) {
                setPriceRange(0);
                setFormData({...formData, monthlyincome: 0})
            } else {
                setPriceRange(price);
                setFormData({...formData, monthlyincome: price})
            }
        }
    };

    return (
        <div>
            <div className='w-full md:w-full lg:w-full m-auto text-center'>
                <h1 className="text-900 text-2xl md:text-4xl mb-6">What is your average monthly income?</h1>
                <div className="w-11 md:w-11 lg:w-11 m-auto animate">
                    <div className="w-11 md:w-8 flex justify-content-center align-items-center m-auto slides-main">
                        <div className="slider-labels">$</div>
                        <InputNumber min={0} max={50000} value={inputValue} onChange={(e)=>handleInputChange(e)} />
                    </div>
                    <Slider
                        value={priceRange}
                        step={50}
                        min={0}
                        max={50000}
                        onChange={handleSlide}
                        className='mt-4'
                    />
                     <div className="flex align-items-center justify-content-between mt-3 ranges">
                        <span>$3k</span>
                        <span>$50k+</span>
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

export default StepFourteenRef;
