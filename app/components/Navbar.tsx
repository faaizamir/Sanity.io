import { ModeToggle } from "@/components/ModeToggle";
import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="w-full relative flex items-center justify-between py-4">
            <Link href="/" className="font-bold text-4xl">
                Faaiz<span className="text-primary">Blog</span>
            </Link>
            <ModeToggle/>
        </nav>
    );
}