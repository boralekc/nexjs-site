import Link from 'next/link';
import Navigation from './Navigation';

const SettingsPanel = () => {

  return (
    <>
      <link
        href="https://cdn.jsdelivr.net/npm/remixicon@4.1.0/fonts/remixicon.css"
        rel="stylesheet"
      />
      <div className="fixed left-0 top-0 w-64 h-full bg-gray-900 p-4">
        <Navigation />
      </div>
      <main className='ml-64 border-b-green-600 h-16 shadow-gray-600 shadow-md'>
        <div className='py-2 px-4 bg-white flex items-center'>
          <button type='button' className='text-lg text-gray-600'>
            <i className="ri-menu-line"></i>
          </button>
          <ul className='flex'>
            <li className='mr-2'>
              <Link href='#' className='text-gray-400 text-sm'>Dashboard</Link>
            </li>
            <li>
            </li>
          </ul>
        </div>
      </main>
    </>
  );
}

export default SettingsPanel;
