import { useState } from "react";
import { Slider } from 'primereact/slider'
import {Button} from 'primereact/button';
import { InputNumber } from 'primereact/inputnumber'
const formatPrice = (value) => {
      return `${value}`;
  };

const StepFourRef = ({formData, setFormData, step, setStep})=> {
    const [priceRange, setPriceRange] = useState(formData.propertyValue);
    const [inputValue, setInputValue] = useState(formatPrice(priceRange));

    const handleSlide = (event) => {
        const value = event.value;
        setInputValue(formatPrice(value));
        setPriceRange(value);
        setFormData({...formData, propertyValue: value})
    };
    

    const handleInputChange = (event) => {
        const value = event.value;
        setInputValue(value);
        if (Number(value)) {
            const price = parseInt(value);
            if(price > 2000000) {
                setPriceRange(2000000);
                setFormData({...formData, propertyValue: 2000000})
            } else if(price === 200000) {
                setPriceRange(200000);
                setFormData({...formData, propertyValue: 200000})
            } else {
                setPriceRange(price);
                setFormData({...formData, propertyValue: price})
            }
        }
    };

    return (
        <div>
            <div className='w-full md:w-8 lg:w-8 m-auto text-center'>
                <h1 className="text-900 text-4xl mb-6">Please estimate the value of the property.</h1>
                <div className="w-full md:w-8 lg:w-8 m-auto">
                    <InputNumber min={200000} max={2000000} value={inputValue} onChange={(e)=>handleInputChange(e)} className="w-6 md:w-2" />
                    <Slider
                        value={priceRange}
                        step={50}
                        min={200000}
                        max={2000000}
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
