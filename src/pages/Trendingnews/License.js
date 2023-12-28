import { useState } from 'react'
import Licencebox from './Licencebox';
import Licensecard from './Licensecard';


 


export default function Deempathyzing() {  
    const [value, setValue] = useState(50); 
    const handleRangeChange = (e) => {
        setValue(e.target.value);
    };
   
    return (
        <div className="min-h-screen  w-screen">
            <div className=" w-full mx-auto h-1/2 ">
               <Licensecard/>
               <Licencebox/>
            </div>
        </div>

    )
}
