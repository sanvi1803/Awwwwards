import { useEffect, useRef, useState } from 'react'
import Button from './Button';
import { TiLocationArrow } from 'react-icons/ti';
import { useWindowScroll } from 'react-use';
import { gsap } from 'gsap/all';
const navItems = ['Nexus', 'Vault', 'Prologue', 'About', 'Contact'];
const NavBar = () => {
    const [isAudioPlaying, setisAudioPlaying] = useState(false);
    const [isIndicatorActive, setIsIndicatorActive] = useState(false);

    const navContainerRef = useRef(null);
    const audioElementRef = useRef(null);

    const { y: currentScrollY } = useWindowScroll();
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isNavVisible, setIsNavVisible] = useState(false)

    useEffect(() => {
        if (currentScrollY === 0) {
            // Topmost position: show navbar without floating-nav
            setIsNavVisible(true);
            navContainerRef.current.classList.remove("floating-nav");
        } else if (currentScrollY > lastScrollY) {
            // Scrolling down: hide navbar and apply floating-nav
            setIsNavVisible(false);
            navContainerRef.current.classList.add("floating-nav");
        } else if (currentScrollY < lastScrollY) {
            // Scrolling up: show navbar with floating-nav
            setIsNavVisible(true);
            navContainerRef.current.classList.add("floating-nav");
        }

        setLastScrollY(currentScrollY);
    }, [currentScrollY, lastScrollY]);

    useEffect(() => {
        gsap.to(navContainerRef.current, {
            y: isNavVisible ? 0 : -100,
            opacity: isNavVisible ? 1 : 0,
            duration: 0.2,
        });
    }, [isNavVisible]);

    const toggleAudioIndicator = () => {
        setisAudioPlaying((prev) => !prev);
        setIsIndicatorActive((prev) => !prev);
    }

    useEffect(() => {
        if (isAudioPlaying) {
            audioElementRef.current.play();
        }
        else {
            audioElementRef.current.pause();
        }
    }, [isAudioPlaying])
    return (
        <div ref={navContainerRef} className='fixed inset-x-0 top-4 z-50 h-16 border-none transition-all duration-700 sm:inset-6'>
            <header className='absolute top-1/2 w-full -translate-y-1/2'>
                <nav className='flex size-full items-center justify-between p-4'>
                    <div className='flex items-centergap7
                    '>
                        <img src="/img/logo.png" alt="logo" className='w-10' />
                        <Button
                            id='product-button'
                            title='Products'
                            rightIcon={<TiLocationArrow />}
                            containerClass='bg-blue-50 md:flex hidden items-center gap-1 justify-center'
                        />
                    </div>
                    <div className='flex h-full items-center'>
                        <div className='hidden md:block'>
                            {navItems.map((item, index) => (
                                <a
                                    key={index}
                                    className='nav-hover-btn'
                                    href={`#${item.toLowerCase()}`}
                                >
                                    {item}
                                </a>
                            ))}
                        </div>
                        <button
                            onClick={toggleAudioIndicator}
                            className='ml-10 flex items-center space-x-0.5'>
                            <audio
                                className='hidden'
                                loop
                                src="/audio/Alec Benjamin - Let Me Down Slowly (Lyrics).mp3"
                                ref={audioElementRef} />
                            {[1, 2, 3, 4].map((bar, index) => (
                                <div
                                    key={index}
                                    className={`indicator-line ${isIndicatorActive ? 'active' : ''}`}
                                    style={{ animationDelay: `${bar * 0.1}s` }}
                                />
                            ))}

                        </button>
                    </div>
                </nav>
            </header>
        </div>
    )
}

export default NavBar
