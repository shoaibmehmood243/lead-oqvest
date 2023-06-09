import { useState } from "react";
import { Slider } from 'primereact/slider'
import {Button} from 'primereact/button';
import { InputNumber } from 'primereact/inputnumber'
const formatPrice = (value) => {
      return `${value}`;
  };

const StepTenRef = ({formData, setFormData, step, setStep})=> {
    const [priceRange, setPriceRange] = useState(formData.additionalCash);
    const [inputValue, setInputValue] = useState(formatPrice(priceRange));

    const handleSlide = (event) => {
        const value = event.value;
        setInputValue(formatPrice(value));
        setPriceRange(value);
        setFormData({...formData, additionalCash: value})
    };
    
    const handleInputChange = (event) => {
        const value = event.value;
        setInputValue(value);
        if (Number(value)) {
            const price = parseInt(value);
            if(price > 1000000) {
                setPriceRange(1000000);
                setFormData({...formData, additionalCash: 1000000})
            } else if(price === 55000) {
                setPriceRange(55000);
                setFormData({...formData, additionalCash: 55000})
            } else {
                setPriceRange(price);
                setFormData({...formData, additionalCash: price})
            }
        }
    };

    return (
        <div>
            <div className='w-12 md:w-11 lg:w-full m-auto text-center'>
                <h1 className="text-900 text-2xl md:text-4xl mb-6">Would you like to borrow additional cash?</h1>
                <div className="w-11 md:w-11 lg:w-11 m-auto animate">
                    <div className="w-11 md:w-8 flex justify-content-center align-items-center m-auto slides-main">
                        <div className="slider-labels">$</div>
                        <InputNumber min={55000} max={1000000} value={inputValue} onChange={(e)=>handleInputChange(e)} />
                    </div>
                    <Slider
                        value={priceRange}
                        step={50}
                        min={55000}
                        max={1000000}
                        onChange={handleSlide}
                        className='mt-4'
                    />
                     <div className="flex align-items-center justify-content-between mt-3 ranges">
                        <span>$55k</span>
                        <span>$1M+</span>
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

export default StepTenRef;
