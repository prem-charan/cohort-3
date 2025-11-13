"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useRef } from "react";

export default function Signup() {
    const usernameRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const router = useRouter();
    
    const handleSubmit = async () => {
        const username = usernameRef.current?.value;
        const password = passwordRef.current?.value;
        
        await axios.post("http://localhost:3000/api/v1/signup", {
            username,
            password
        });
        
        router.push("/signin");
    }
    
    return <div className="w-screen h-screen flex justify-center items-center">
        <div className="border-2 border-red-500 p-4 text-center">
            <p className="text-2xl">
                Sign up page
            </p>
            <div className="flex flex-col gap-2 my-2">
                <input className="border border-gray-400 px-2 h-8" type="text" placeholder="username" ref={usernameRef}></input>
                <input className="border border-gray-400 px-2 h-8" type="text" placeholder="password" ref={passwordRef}></input>
                
                <button 
                    className="border border-red-700 hover:bg-red-700 py-1.5 cursor-pointer" 
                    onClick={handleSubmit}
                >
                    Submit
                </button>
            </div>
        </div>
    </div>
}
