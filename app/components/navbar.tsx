import Link from 'next/link'

const Navbar = () => {
    return (
    <div className="flex justify-between items-center">
        <Link href="/" className="px-5 font-bold text-lg text-gray-700"> Alec Palo </Link>
        <div className="font-bold text-2xl text-gray-700 py-8">
            <Link href="/Projects" className="px-6"> Projects </Link> 
            <Link href="/Blog" className="px-6"> Blog </Link>
            <Link href="/Projects" className="px-6"> Resume </Link> 
            <Link href="/Blog" className="px-6"> Contact </Link>
        </div>
    </div>
    );
}

export default Navbar;
