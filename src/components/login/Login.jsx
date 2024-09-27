import React, { useState } from 'react';
import avatar1 from '../../assets/avatars/avatar8.png';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Importing the toastify CSS

const Login = () => {
    const [avatar, setAvatar] = useState({
        file: null,
        url: ''
    });

    // Function to handle avatar selection
    const handleAvatar = (e) => {
        if (e.target.files[0]) {
            setAvatar({
                file: e.target.files[0],
                url: URL.createObjectURL(e.target.files[0])
            });
        }
    };

    // Handle login form submission with toast notification
    const handleLogin = (e) => {
        e.preventDefault();
        // Trigger a warning toast (you can change it to success, error, etc.)
        toast.success("Login functionality not implemented yet!");
    };

    return (
        <section className='flex w-full p-4 gap-3'>
            {/* Login Section */}
            <div className='w-1/2 p-4 text-center flex flex-col gap-5 text-xl border-r items-center pt-20'>
                <h2>Login</h2>
                <form action="" className='flex flex-col gap-4 items-center'>
                    {/* Display Default Avatar */}
                    <img src={avatar1} alt="avatar" className="w-20" />
                    <input type="text" required placeholder="Email" className='p-2 rounded bg-inherit border'/>
                    <input type="password" required placeholder="Password" className='p-2 rounded bg-inherit border' />
                    <button className='bg-blue-400 p-2 rounded w-full' onClick={(e) => handleLogin(e)}>
                        Login
                    </button>
                </form>
            </div>

            {/* Signup Section */}
            <div className='w-1/2 p-4 text-center flex flex-col gap-3 text-xl items-center pt-20'>
                <h2>Signup</h2>
                <form action="" className='flex flex-col gap-4 items-center'>
                    <label htmlFor="logo">
                        {avatar.url ? (
                            // Display the uploaded avatar
                            <img src={avatar.url} alt="uploaded-avatar" className="w-[100px] h-[100px] rounded-full" />
                        ) : (
                            // Default placeholder for avatar
                            <div className='w-20 h-20 rounded-full bg-red-300 flex items-center justify-center'>
                                Upload
                            </div>
                        )}
                        <input id='logo' type="file" placeholder="img" className='hidden' onChange={handleAvatar} />
                    </label>
                    <input type="text" placeholder="UserName" className='p-2 rounded bg-inherit border' />
                    <input type="text" placeholder="Email" className='p-2 rounded bg-inherit border' />
                    <input type="password" placeholder="Password" className='p-2 rounded bg-inherit border' />
                    <button className='bg-blue-400 p-2 rounded w-full'>
                        Signup
                    </button>
                </form>
            </div>

            {/* Toast Notification Container */}
            <ToastContainer />
        </section>
    );
};

export default Login;