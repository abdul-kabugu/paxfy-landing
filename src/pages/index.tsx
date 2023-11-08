import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Quote from '@/components/Quote'
import Beliefs from '@/components/Beliefs'
import Beliefe1 from '@/components/Beliefe1'
import Beliefe2 from '@/components/Beliefe2'
import Beliefe3 from '@/components/Beliefe3'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col  snap-y scroll-smooth ${inter.className} bg-[url('/img/stars.svg')] bg-black`}
    >
     <Header /> 
      <Hero  />
      <Quote  />
      <Beliefs  />
      <Beliefe1  />
      <Beliefe2  />
      <Beliefe3  />
    </main>
  )
}
