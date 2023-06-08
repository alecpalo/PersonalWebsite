import Image from 'next/image'
import Navbar from './components/navbar'

export default function Home() {
  return (
    <div className='flex flex-col items-center py-20 text-gray-700'>
      <h1>
        An image will go here!
      </h1>
      <h1 className='py-5 text-7xl'>
        Alec Palo
      </h1>
      <h2 className='text-3xl py-5'>
        I like to code!
      </h2>
      <div className='py-5 w-5/6 text-center'>
        <h1 className='text-xlg'>
          I am currently a student at the University of Michigan studying Computer Science and Business.
        </h1>
      </div>
    </div>
  )
}
