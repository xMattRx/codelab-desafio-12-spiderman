import { motion } from 'framer-motion';

export default function Footer() {
    const sections = [
        { title: 'Cinema', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad beatae quibusdam doloremque nulla! Inventore accusantium debitis error iure minima.' },
        { title: 'Prêmios', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad beatae quibusdam doloremque nulla! Inventore accusantium debitis error iure minima.' },
        { title: 'Indicações', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad beatae quibusdam doloremque nulla! Inventore accusantium debitis error iure minima.' },
    ];

    return (
        <motion.footer
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center justify-center w-full bg-[#111826] px-[27.5px] py-16 md:px-12 text-white font-jakarta text-center"
        >
            <div className="flex flex-col md:flex-row md:w-full lg:gap-20 gap-8 md:max-w-full md:justify-center md:items-center">
                {sections.map(({ title, text }) => (
                    <motion.div
                        key={title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-xl font-semibold mb-2 text-[20px] leading-[100%] text-center">{title}</h2>
                        <p className="text-sm leading-relaxed">{text}</p>
                    </motion.div>
                ))}
            </div>
        </motion.footer>
    );
}
