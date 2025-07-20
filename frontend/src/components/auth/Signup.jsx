import React, { useState } from 'react'
import Navbar from '../shared/Navbar'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { Link, useNavigate } from 'react-router-dom'
import { RadioGroup } from '../ui/radio-group'
import axios from 'axios'
import { USER_API_END_POINT } from '../../utils/constant'
import { toast } from 'sonner'
import { useDispatch, useSelector } from 'react-redux'
import { setLoading } from '../../redux/authSlice'
import { Loader2 } from 'lucide-react'

const Signup = () => {

    const [input, setInput] = useState({
        fullname: "",
        email: "",
        phoneNumber: "",
        password: "",
        role: "",
        file: "",
    });

    const navigate = useNavigate();
    const { loading } = useSelector((store) => store.auth);
    const dispatch = useDispatch();

    const changeEventHandler = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    }

    const changeEventHandlerFile = (e) => {
        setInput({ ...input, [e.target.name]: e.target.files[0] });
    }

    const submitHandler = async (e) => {
        e.preventDefault();
        // Handle form submission logic here, such as sending data to an API

        const formData = new FormData();
        formData.append('fullname', input.fullname);
        formData.append('email', input.email);
        formData.append('phoneNumber', input.phoneNumber);
        formData.append('password', input.password);
        formData.append('role', input.role);
        if (input.file) {
            formData.append('file', input.file);
        }
        // Assuming USER_API_END_POINT is defined in your constants
        try {
            dispatch(setLoading(true)); // Set loading state to true
            const res = await axios.post(`${USER_API_END_POINT}/register`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
                withCredentials: true

            });
            if (res.data.success) {
                navigate('/login');
                toast.success("Signup successful!");
            }
        } catch (error) {
            toast.error(error.response.data.message);
            console.log(error);

        }finally{
            dispatch(setLoading(false)); // Set loading state to false
        }

    }

    return (
        <div>
            <Navbar />
            <div className='flex items-center justify-center max-w-7xl mx-auto'>
                <form onSubmit={submitHandler} className='w-2/5 border border-gray-200 rounded-md p-4 my-10'>
                    <h1 className='font-bold text-xl mb-5'>Sign Up</h1>

                    <div className='my-2'>
                        <Label className='my-2' >Full Name</Label>
                        <Input

                            type="text"
                            value={input.fullname}
                            onChange={changeEventHandler}
                            name="fullname"
                            placeholder="Name"

                        />
                    </div>

                    <div className='my-2'>
                        <Label className='my-2'>Email</Label>
                        <Input

                            type="email"
                            value={input.email}
                            onChange={changeEventHandler}
                            name="email"
                            placeholder="abhi@gmail.com"

                        />
                    </div>

                    <div className='my-2'>
                        <Label className='my-2' >Phone Number</Label>
                        <Input

                            type="text"
                            value={input.phoneNumber}
                            onChange={changeEventHandler}
                            name="phoneNumber"
                            placeholder="8080808080"

                        />
                    </div>

                    <div className='my-2'>
                        <Label className='my-2'>Password</Label>
                        <Input

                            type="password"
                            value={input.password}
                            onChange={changeEventHandler}
                            name="password"
                            placeholder="Enter your password"
                        />
                    </div>

                    <div className='flex items-center justify-between flex-wrap gap-4 my-4'>
                        <div className="flex gap-4">
                            <div className="flex items-center space-x-2">
                                <Input
                                    type="radio"
                                    name="role"
                                    value="student"
                                    checked={input.role === "student"}
                                    onChange={changeEventHandler}
                                    className="cursor-pointer"
                                />
                                <Label >Student</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Input
                                    type="radio"
                                    name="role"
                                    value="recruiter"
                                    checked={input.role === "recruiter"}
                                    onChange={changeEventHandler}
                                    className="cursor-pointer"
                                />
                                <Label >Recruiter</Label>
                            </div>
                        </div>

                        <div className='flex items-center gap-2'>
                            <Label >Profile</Label>
                            <Input
                                accept="image/*"
                                type="file"
                                onChange={changeEventHandlerFile}
                                className="cursor-pointer"
                            />
                        </div>
                    </div>
                    {
                        loading ? <button className='w-full my-4'><Loader2 className='mr-4 h-4 w-4 animate-spin' />Please wait..</button> : <Button type="submit" className=" w-full my-4 bg-[#6A38C2] text-white cursor-pointer">Signup</Button>

                    }

                    <span className='text-sm'>
                        Already have an account? <Link to="/login" className='text-blue-600'>Login</Link>
                    </span>
                </form>
            </div>
        </div>
    )
}

export default Signup
