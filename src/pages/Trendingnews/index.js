import { useState } from 'react'
import Tweet from '../Tweet';
import Whotofollow from './Whotofollow';
import Trending from './Trending';
import Bar from "../MainLG/Bar"
import Navbar from './Navbar';



function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}


export default function Deempathyzing( ) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [active, setactive] = useState("Features");
    const [showPassword, setShowPassword] = useState(false);


    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const activelink = (id) => {
        setactive(id)
    }

    return (
        <div className="min-h-screen  w-screen">
            <Navbar />
            <div>
                <div className='flex items-center justify-end'>
                    <div className='w-3/5  flex justify-end '>
                        <div className=" w-4/5  mb-2 mt-6">
                            <Bar />
                            <div className='w-full'>
                                <Tweet />
                            </div>
                        </div>
                    </div>
                    <div className='mb-44'>
                        <Whotofollow  />
                        <div>
                            <Trending  />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
