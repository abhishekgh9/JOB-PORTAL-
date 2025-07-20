import React from 'react'
import { Search } from  'lucide-react'
import { Button } from './ui/button'

const HeroSection = () => {
    return (
        <div className='text-center '>
            <div className='flex flex-col gap-5 my-10 '>
                <span className='mx-auto px-4 py-2 rounded-full bg-gray-200 text-[#F83002] font-medium'>No. 1 Job Hunt Website</span>
                <h1 className='text-5xl font-bold'>Search , Apply & <br /> Get your <span className='text-[#6A38C2]'>Dream Jobs</span></h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, eligendi? Cupiditate iusto deleniti pariatur!</p>
                <div className='flex w-[40%] shadow-lg border-gray-200 pl-3 rounder-full items-center mx-auto gap-4'>
                    <input 
                    type="text" 
                    placeholder='Find your dream jobs...'
                    className='outline-none border-none w-full'
                    />

                    <Button className="rounded-r-full bg-[#6A38C2]">
                        <Search className='h-4 w-4'/>
                       
                    </Button>
                </div>
            </div>

        </div>
    )
}

export default HeroSection
