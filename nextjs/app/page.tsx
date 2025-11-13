import Link from "next/link";

export default function Home() {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
        <div className="border-2 border-white">
            <p className="text-3xl text-center mt-2">
                Todo app 
            </p>
            <div className="flex gap-4 m-4">
                <Link className="border-red-500 hover:bg-red-700 border-2 text-md px-2 py-2.5" href={"/signup"}>Sign up to todo app</Link>
                <Link className="border-2 border-green-500 hover:bg-green-700 text-md px-2 py-2.5" href={"/signin"}>Sign in to todo app</Link>
            </div>
        </div>
    </div>
  );
}
