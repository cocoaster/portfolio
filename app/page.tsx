import Image from 'next/image' 
import Screens from '../public/screens.png'
export const metadata = {
  title: 'HomeTheo Web Development',
  description: 'Web Site Development',
}
export default function Home() {
  return (
    
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        {/* <Image 
        src= {Screens}
          alt="Meddia Screens"
          width={800}
        height={700} /> */}
      </div>
    
  )
}
