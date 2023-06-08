import Link from 'next/link'

const Navbar = () => {
    return (
    <div className="flex justify-between items-center">
        <div className="px-5 font-bold text-lg text-gray-700">
            <h1> Add Image version of my Name :) </h1>
        </div>
        <div className="font-bold text-2xl text-gray-700 py-8">
        <Link href="/" className="px-10"> Home </Link>
        <Link href="/AboutMe" className="px-6"> About Me </Link>
        <Link href="/Projects" className="px-6"> Projects </Link> 
        <Link href="/Projects" className="px-6"> Resume </Link> 
        </div>
    </div>
    );
}

export default Navbar;
