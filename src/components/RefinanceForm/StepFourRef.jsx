import { useState } from "react";
import { Slider } from 'primereact/slider'
import {Button} from 'primereact/button';
import { InputText } from "primereact/inputtext";

const formatPrice = (value) => {
    if (value >= 1000) {
      return `$${(value / 1000).toFixed(1)}K`;
    } else {
      return `$${value}`;
    }
  };

const StepFourRef = ({formData, setFormData, step, setStep})=> {
    const [priceRange, setPriceRange] = useState(formData.purchasePrice);
    const [inputValue, setInputValue] = useState(formatPrice(priceRange));

    const handleSlide = (event) => {
        const value = event.value;
        setInputValue(formatPrice(value));
        setPriceRange(value);
        setFormData({...formData, purchasePrice: value})
    };
    

    const handleInputChange = (event) => {
        const value = event.target.value;
        setInputValue(value);
        if (!isNaN(value)) {
            const price = parseInt(value);
            setPriceRange(price);
            setFormData({...formData, purchasePrice: price})
        }
    };

    return (
        <div>
            <div className='w-8 m-auto text-center'>
                <h1 className="text-900 text-4xl mb-6">Please estimate the value of the property.</h1>
                <div className="w-8 m-auto">
                    <InputText value={inputValue} onChange={handleInputChange} className="w-2" />
                    <Slider
                        value={priceRange}
                        step={50}
                        min={55000}
                        max={1000000}
                        onChange={handleSlide}
                        className='mt-4'
                    />
                </div>
                <div className="mt-6 flex align-items-center justify-content-center gap-4">
                    <Button onClick={()=> setStep(step-1)} label="Back" className="px-6" outlined />
                    <Button onClick={()=> setStep(step+1)} label="Continue" className="px-6 surface-900" />
                </div>
            </div>
        </div>
    )
}

export default StepFourRef;