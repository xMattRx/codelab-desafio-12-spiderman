import { motion } from 'framer-motion';
import logo2 from '../assets/logo2.png';
import spider1 from '../assets/spider-principal1.png';
import logo3 from '../assets/logo3.png';


export default function Hero() {
    return (
        <motion.main
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row-reverse mt-[64px] lg:mb-[216px] lg:justify-center mb-[64px] max-w-[327px] md:max-w-full w-full justify-center md:justify-between items-center text-center"
        >
            <img
                src={logo3}
                alt="Spider Symbol Background"
                className="hidden lg:block absolute left-1/2 top-1/2 w-[500px] -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none"
            />
            <motion.img
                src={spider1}
                alt="Spider Icon"
                className="max-w-[376px] md:max-w-[420px] lg:max-w-[700px] lg:absolute lg:right-[-150px] w-full"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
            />

            <div className="flex flex-col md:max-w-[324px] md:items-start lg:items-center lg:max-w-[600px] items-center justify-center w-full z-10">
                <img src={logo2} className="mt-10 mb-8" alt="Spider Logo" />
                <p className="font-medium text-sm leading-[1.5] md:text-left lg:text-center mb-8 tracking-normal text-center font-['Plus_Jakarta_Sans']">
                    Miles Morales é o mais novo Homem-Aranha de Nova York da Marvel. Após a morte prematura de seu pai, Miles foi apresentado a Peter Parker, que rapidamente se tornou seu amigo e mentor. Quando Miles foi picado por uma aranha geneticamente modificada da Oscorp, ele desenvolveu poderes únicos e, após meses de insistência, Peter concordou em treiná-lo.
                </p>
                <motion.button
                    className="bg-[#FF3C3C] md:max-w-[214px] lg:max-w-[272px] w-full hover:bg-red-500 text-white font-bold py-3 px-6 rounded transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    Comprar Ingresso
                </motion.button>
            </div>
        </motion.main>
    );
}
