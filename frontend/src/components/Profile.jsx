import React, { useState } from 'react'
import Navbar from './shared/Navbar'
import { Avatar, AvatarImage } from './ui/avatar'
import { Button } from './ui/button'
import { Contact, Mail, Pen } from 'lucide-react'
import { Badge } from './ui/badge'
import { Label } from './ui/label'
import AppliedJobTable from './AppliedJobTable'



const skills = ["HTML", "CSS", "JS", "REACT.JS"];
const isResume = true;
const Profile = () => {
    // const [open,setOpen] =  useState(false); <<----------continue from here 6:40:21----------------->>
    
    return (
        <div>
            <Navbar />
            <div className='max-w-4xl mx-auto bg-white border border-gray-200 rounded-2xl my-5 p-8'>
                <div className='flex justify-between'>
                    <div className='flex items-center gap-4'>
                        <Avatar className="h-24 w-24">
                            <AvatarImage src="https://th.bing.com/th/id/R.0fa3fe04edf6c0202970f2088edea9e7?rik=joOK76LOMJlBPw&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fgoogle-logo-png-open-2000.png&ehk=0PJJlqaIxYmJ9eOIp9mYVPA4KwkGo5Zob552JPltDMw%3d&risl=&pid=ImgRaw&r=0" alt="profile" />

                        </Avatar>
                        <div>
                            <h1 className='font-medium text-xl'>Abhishek</h1>
                            <p>SDE-1</p>
                        </div>
                    </div>
                    <Button className="text-right" variant={"outline"}><Pen /></Button>
                </div>
                <div className='my-5'>
                    <div className='flex items-center gap-3 my-2'>
                        <Mail />
                        <span>abhishekk57078@gmail.com</span>
                    </div>
                    <div className='flex items-center gap-3 my-2'>
                        <Contact />
                        <span>+91-7876707617</span>
                    </div>
                </div>
                <div className='my-5 '>
                    <h1>Skills</h1>
                    <div className='flex items-center gap-1'>

                        {
                            skills.length != 0 ? skills.map((item, index) => <Badge key={index} className={"bg-purple-500 text-white"}>{item}</Badge>) : <span>NA</span>
                        }
                    </div>

                </div>
                <div className='grid w-full max-w-sm items-center gap-1.5'>
                    <Label className={"text-md font-bold"}>
                        Resume
                    </Label>
                    {
                        isResume ? <a target='blank' href='https://youtube.com/@youtube' className='text-blue-500 hover:underline cursor-pointer '>Resume Link</a> : <span>NA</span>
                    }

                </div>



            </div>

            <div className='max-w-4xl mx-auto bg-white rounded-2xl'>
                <h1 className='font-bold text-lg my-5'>Applied Jobs</h1>
                {/* Applied Job Table   */}
                <AppliedJobTable />
            </div>

        </div>
    )
}

export default Profile
