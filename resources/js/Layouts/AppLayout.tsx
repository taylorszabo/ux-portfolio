// Layouts/AppLayout.tsx
import {Component, ReactNode} from 'react';

import { motion, AnimatePresence } from 'framer-motion';
import {usePage} from "@inertiajs/react";
import NavBar from "@/Components/NavBar";
import Footer from "@/Components/Footer";


type Props = { children: ReactNode };



export default function AppLayout({ children }: Props) {
    const routeName = usePage().url;   // key for AnimatePresence

    return (
        <div className="min-h-screen flex flex-col text-gray-800 dark:text-gray-100 bg-white dark:bg-brand">
            <NavBar />

            <AnimatePresence mode="wait">
                <motion.main
                    key={routeName}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.35 }}
                    className="flex-1"
                >
                    {children}
                </motion.main>
            </AnimatePresence>

            <Footer />
        </div>
    );
}
