import Image from 'next/image'
import { Inter } from 'next/font/google'
import StyleStorage from '@/components/StyleStorage'
import Commentsui from '@/components/Commentsui/Commentsui'
import Argyle from "../components/Font Choice/Argyle"
import Bussinessui from '@/components/Font Choice/Bussinessui'
import Chatui from '@/components/Font Choice/Chatui'
import Tableui from "../components/Tableui/Tableui"


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    
    <div className='w-full h-screen'>
      {/* <StyleStorage/>
      <Commentsui/>
      <Argyle/>
      <Bussinessui/>
      <Chatui/> */}
  <Tableui/>
    </div>
  )
}
