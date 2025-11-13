"use client";
export default function Signin() {
    
    return <div className="w-screen h-screen flex justify-center items-center">
        <div className="border-2 border-green-500 p-4 text-center">
            <p className="text-2xl">
                Sign in page
            </p>
            <div className="flex flex-col gap-2 my-2">
                <input className="border border-gray-400 px-2 h-8" type="text" placeholder="username"></input>
                <input className="border border-gray-400 px-2 h-8" type="text" placeholder="password"></input>
                
                <button className="border border-green-700 hover:bg-green-700 py-1.5 cursor-pointer" onClick={() => {
                    
                }}>Submit</button>
            </div>
        </div>
    </div>
}
