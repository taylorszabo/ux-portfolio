import { motion } from 'framer-motion';
import {Link} from "@inertiajs/react";


export default function Hero() {
    return (
        <section className="py-24 md:py-36 text-center">
            <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-5xl md:text-7xl font-extrabold leading-tight mb-8"
            >
                I craft <span className="text-brand-accent">delightful UX</span>
                <br /> for humans & machines
            </motion.h1>

            <Link
                href="/work"
                className="inline-block px-8 py-3 rounded-full bg-brand-accent text-white font-semibold hover:scale-105 transition"
            >
                View my work
            </Link>
        </section>
    );
}
