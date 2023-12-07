import Image from 'next/image'
import { Inter } from 'next/font/google'
import StyleStorage from '@/components/StyleStorage'
import Commentsui from '@/components/Commentsui/Commentsui'
import Argyle from "../components/Font Choice/Argyle"
import Bussinessui from '@/components/Font Choice/Bussinessui'
import Chatui from '@/components/Font Choice/Chatui'
import Tableui from "../components/Tableui/Tableui"
import Cards from '@/components/Font Choice/Cards'
import Card2 from '@/components/Font Choice/Card2'
import Deempathyzing from "../components/Font Choice/Deempathyzing"
import Flightbookui from "../components/Font Choice/Flightbookui"
import Sidebar from '@/components/Font Choice/Sidebar'
import Label from '@/components/Font Choice/Label'
import Addlabel from "../components/Font Choice/Addlabel"
import Estateui from '@/components/Font Choice/Estateui'
import Heartrate from '@/components/Font Choice/Heartrate'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    
    <div className='w-full h-screen'>
      {/* <StyleStorage/>
      <Commentsui/>
      <Argyle/>
      <Bussinessui/>
      <Chatui/> */}
  {/* <Tableui/> */}
  {/* <Cards/> */}
  {/* <Card2/> */}
  {/* <Deempathyzing/> */}
  {/* <Flightbookui/> */}
  {/* <Sidebar/> */}
  {/* <Label/> */}
  {/* <Addlabel/> */}
{/* <Estateui/> */}
<Heartrate/>
    </div>
  )
}
