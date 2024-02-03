import HomeLayout from '@/layouts/HomeLayout';
import React from 'react';
import Home from './ui/Home/Home';

export default async function HomePage() {
    return (
        <html lang='en'>
            <body>
                <HomeLayout>
                    <Home />
                </HomeLayout>
            </body>
        </html>
    )
}

