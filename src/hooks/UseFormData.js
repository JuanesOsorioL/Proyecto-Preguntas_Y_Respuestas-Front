import { useRef, useState } from 'react';

const useFormData = (initial) => {
    const form = useRef(initial);
    const [formData, setFormData] = useState({});

        
    const getFormData = () => { 
    const fd = new FormData(form.current);
    const obj = {};
    fd.forEach((value, key) => {
        obj[key] = value;

        if(key.includes("presupuesto")){
            obj[key] = parseFloat(value);
        }
        

    });

    return obj;
    };
    
    const updateFormData = () => {
    setFormData(getFormData());
    };
    return { form, formData, updateFormData };
};

export default useFormData;