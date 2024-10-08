import { Inter } from 'next/font/google';
import { Metadata } from 'next';
import AppHome from '@/widgets/app-home/app-home';


const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create next App',
  description: 'Generated by create next app'
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
    <AppHome />
        {children}
        </>
  );
}
