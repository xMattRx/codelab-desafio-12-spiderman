import logo from '../assets/logo.png';
import logo2 from '../assets/logo2.png';
import spider1 from '../assets/spider-principal1.png';
import teias from '../assets/teias.png';


export default function Home() {
    return (
        <>
            <div className="min-h-screen flex flex-col lg:overflow-x-hidden lg:relative w-full items-center text-white font-jakarta bg-[url('/assets/teias.png')] bg-no-repeat bg-cover bg-center">
                <img
                    src={teias}
                    alt="Teias de fundo"
                    className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none z-0"
                />

                <div className='max-w-[1196px] w-full px-6 flex flex-col items-center justify-center  '>
                    <header className="flex h-20 items-center justify-between w-full">
                        <img src={logo} alt="Spider Icon" className="w-10 h-10" />
                        <nav>
                            <ul className="flex gap-6 md:gap-16">
                                <li><a className="text-white size-[14px] font-medium " href="#">Sinopse</a></li>
                                <li><a className="text-white size-[14px] font-medium " href="#">Elenco</a></li>
                                <li><a className="text-white size-[14px] font-medium " href="#">Fórum</a></li>
                            </ul>
                        </nav>
                    </header>
                    <main className="flex flex-col md:flex-row-reverse mt-[64px] lg:mb-[216px] lg:justify-center mb-[64px] max-w-[327px] md:max-w-full w-full justify-center md:justify-between items-center text-center">
                        <img src={spider1} alt="Spider Icon" className="max-w-[376px] md:max-w-[420px] lg:max-w-[700px] lg:absolute lg:right-[-150px] w-full" />
                        <div className="flex flex-col md:max-w-[324px] md:items-start lg:items-center lg:max-w-[600px] items-center justify-center w-full">
                            <img src={logo2} className="mt-10 mb-8" />
                            <p className="font-medium text-sm leading-[1.5] md:text-left lg:text-center mb-8 tracking-normal text-center font-['Plus_Jakarta_Sans']">
                                Miles Morales é o mais novo Homem-Aranha de Nova York da Marvel. Após a morte prematura de seu pai, Miles foi apresentado a Peter Parker, que rapidamente se tornou seu amigo e mentor. Quando Miles foi picado por uma aranha geneticamente modificada da Oscorp, ele desenvolveu poderes únicos e, após meses de insistência, Peter concordou em treiná-lo.
                            </p>
                            <button className="bg-[#FF3C3C] md:max-w-[214px] lg:max-w-[272px] w-full hover:bg-red-500 text-white font-bold py-3 px-6 rounded transition-colors">
                                Comprar Ingresso
                            </button>
                        </div>
                    </main>
                </div>
            </div>
            <footer className="flex flex-col items-center justify-center w-full bg-[#111826] px-[27.5px] py-16 md:px-12 text-white font-jakarta text-center">
                <div className="flex flex-col md:flex-row md:w-full lg:gap-20 md:flex gap-8 md:max-w-full md:justify-center md:items-center">
                    <div>
                        <h2 className="text-xl font-semibold mb-2 text-[20px] leading-[100%] text-center">Cinema</h2>
                        <p className="text-sm leading-relaxed">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad beatae
                            quibusdam doloremque nulla! Inventore accusantium debitis error iure
                            minima.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-xl font-semibold mb-4 text-[20px] leading-[100%] text-center">Prêmios</h2>
                        <p className="text-sm leading-relaxed">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad beatae
                            quibusdam doloremque nulla! Inventore accusantium debitis error iure
                            minima.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-xl font-semibold mb-2 text-[20px] leading-[100%] text-center">Indicações</h2>
                        <p className="text-sm leading-relaxed">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad beatae
                            quibusdam doloremque nulla! Inventore accusantium debitis error iure
                            minima.
                        </p>
                    </div>
                </div>
            </footer>

        </>
    );
}
