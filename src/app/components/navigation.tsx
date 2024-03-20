import Link from "next/link";

export function Navigation() {
    return (
        <nav className="flex gap-4 bg-blue-900 p-4">
            <Link href="/">
                <div className="text-white hover:text-blue-100">Hjem</div>
            </Link>
            <Link href="prosjekter">
                <div className="text-white hover:text-blue-100">Prosjekter</div>
            </Link>
        </nav>
    );
}