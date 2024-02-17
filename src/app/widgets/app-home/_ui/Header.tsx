import Link from 'next/link';

const Header = () => {
  return (
    <header className="text-black p-8">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">Your Logo</div>
        <nav className="space-x-4">
          <Link href="/settings" className="hover:text-violet-600 font-bold text-xs" passHref>ВОЙТИ</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
