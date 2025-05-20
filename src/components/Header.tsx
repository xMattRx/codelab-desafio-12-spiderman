import { motion } from 'framer-motion';
import logo from '../assets/logo.png';

export default function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="flex h-20 items-center justify-between w-full"
    >
      <img src={logo} alt="Spider Icon" className="w-10 h-10" />
      <nav>
        <ul className="flex gap-6 md:gap-16">
          {['Sinopse', 'Elenco', 'Fórum'].map((item) => (
            <li key={item}>
              <a className="text-white text-[14px] font-medium" href="#">
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </motion.header>
  );
}
