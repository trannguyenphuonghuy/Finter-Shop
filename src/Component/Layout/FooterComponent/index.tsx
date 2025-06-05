import { Link } from 'react-router-dom'

import { FOOTER_CONTENT } from '../../Contents'

const Footer: React.FC = () => {
    return (
        <footer className="w-full flex justify-center border-t border-gray-400 py-5 mt-10">
            <div className="w-wcontainer md:w-full max-w-[1200px] flex flex-col md:flex-row justify-between gap-10 md:gap-5 ">
                {/* Logo Footer */}
                <div className="w-full md:w-2/5 text-white bg-gradient-to-r from-pink-600 to-green-400 p-5 rounded-xl">
                    <div>
                        <div className="flex items-center gap-2 md:gap-3 shrink-0 justify-center md:justify-start">
                            <img className='rounded-full size-[45px] md:size-[50px]' src={FOOTER_CONTENT.logo} alt=""></img>
                            <h1 className='title-h1'>{FOOTER_CONTENT.title}</h1>
                        </div>
                        <p className='mt-3 text-center md:text-left'>{FOOTER_CONTENT.description}</p>
                    </div>
                </div>

                {/* Group link */}
                <div className='flex-1 flex flex-wrap justify-center text-center md:mt-5 md:justify-end gap-7'>
                    {FOOTER_CONTENT.footerLinks.map((section, i) => (
                        <div key={i} className="min-w-[150px]">
                            <h2 className="title-h2">{section.title}</h2>
                            <ul className='flex flex-col gap-3 mt-4'>
                                {section.link.map((l, j) => (
                                    <li key={j}>
                                        <Link to={l.path} className="text-[0.8rem] text-gray-600 dark:text-gray-400 pb-[2px] border-b-1 hover:border-none hover:text-white">
                                            {l.item}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </footer>
    )
}
export default Footer