/* eslint-disable react/prop-types */
import { useRef, useState } from 'react';
import { TiLocationArrow } from 'react-icons/ti';

export const BentoTilt = ({ children, className = "" }) => {
    const [transformStyle, setTransformStyle] = useState("");
    const itemRef = useRef(null);

    const handleMouseMove = (event) => {
        if (!itemRef.current) return;

        const { left, top, width, height } =
            itemRef.current.getBoundingClientRect();

        const relativeX = (event.clientX - left) / width;
        const relativeY = (event.clientY - top) / height;

        const tiltX = (relativeY - 0.5) * 15;
        const tiltY = (relativeX - 0.5) * -15;

        const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(.95, .95, .95)`;
        setTransformStyle(newTransform);
    };

    const handleMouseLeave = () => {
        setTransformStyle("");
    };

    return (
        <div
            ref={itemRef}
            className={className}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ transform: transformStyle }}
        >
            {children}
        </div>
    );
};
export const BentoCard = ({ src, title, description, isComingSoon }) => {
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
    const [hoverOpacity, setHoverOpacity] = useState(0);
    const hoverButtonRef = useRef(null);

    const handleMouseMove = (event) => {
        if (!hoverButtonRef.current) return;
        const rect = hoverButtonRef.current.getBoundingClientRect();

        setCursorPosition({
            x: event.clientX - rect.left,
            y: event.clientY - rect.top,
        });
    };

    const handleMouseEnter = () => setHoverOpacity(1);
    const handleMouseLeave = () => setHoverOpacity(0);

    return (
        <div className="relative size-full">
            <video
                src={src}
                loop
                muted
                autoPlay
                className="absolute left-0 top-0 size-full object-cover object-center"
            />
            <div className="relative z-10 flex size-full flex-col justify-between p-5 text-blue-50">
                <div>
                    <h1 className="bento-title special-font">{title}</h1>
                    {description && (
                        <p className="mt-3 max-w-64 text-xs md:text-base">{description}</p>
                    )}
                </div>

                {isComingSoon && (
                    <div
                        ref={hoverButtonRef}
                        onMouseMove={handleMouseMove}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        className="border-hsla relative flex w-fit cursor-pointer items-center gap-1 overflow-hidden rounded-full bg-black px-5 py-2 text-xs uppercase text-white/20"
                    >
                        {/* Radial gradient hover effect */}
                        <div
                            className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
                            style={{
                                opacity: hoverOpacity,
                                background: `radial-gradient(100px circle at ${cursorPosition.x}px ${cursorPosition.y}px, #656fe288, #00000026)`,
                            }}
                        />
                        <TiLocationArrow className="relative z-20" />
                        <p className="relative z-20">coming soon</p>
                    </div>
                )}
            </div>
        </div>
    );
};
const Features = () => {
    return (
        <section className="bg-black pb-52">
            <div className="container mx-auto px-3 md:px-10">
                <div className="px-5 py-32">
                    <p className="font-circular-web text-lg text-blue-50">Into the Metagame Layer</p>

                    <p className="max-w-md font-circular-web text-lg text-blue-50 opacity-50">
                        Immerse yourself in a rich and ever-expanding ecosystem where a vibrant array of products converge into an interconnected universe.
                    </p>
                </div>


                <BentoTilt className="border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]">
                    <BentoCard
                        src="videos/feature-1.mp4"
                        title={
                            <>radia<b>n</b>t</>
                        }
                        isComingSoon={true}
                        description="A cross-platform metagame app, turning your activities across Web2 and Web3 games into a rewarding adventure."
                    />
                </BentoTilt>
                <div className='grid h-[135vh] grid-cols-2 grid-rows-3 gap-7'>
                    <BentoTilt className='bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2'>
                        <BentoCard
                            src="videos/feature-2.mp4"
                            title={
                                <>zig<b>m</b>a</>
                            }
                            isComingSoon={true}
                            description="An anime and gaming inspired NFT collection, with a unique twist that will keep you on the edge of your seat."
                        />
                    </BentoTilt>
                    <BentoTilt className='bento-tilt_1 row-span-1 ms-32 md:col-span-1 md:ms-0'>
                        <BentoCard
                            src="videos/feature-3.mp4"
                            title={
                                <>n<b>e</b>xus</>
                            }
                            isComingSoon={false}
                            description="A gamified social hub, adding a new dimension of play to your identity, Web3 engagement and social interaction"
                        />
                    </BentoTilt>
                    <BentoTilt className='bento-tilt_1 me-14 md:col-span-1 md:me-0'>
                        <BentoCard
                            src="videos/feature-4.mp4"
                            title={
                                <>az<b>u</b>l</>
                            }
                            isComingSoon={true}
                            description="A cross-world AI Agent - elevating your gameplay to be more fun and productive."
                        />
                    </BentoTilt>
                    <BentoTilt className='bento-tilt_2'>
                        <div className="flex size-full flex-col justify-between bg-violet-300 p-5">
                            <h1 className='bento-title special-font max-w-64 text-black'>M<b>o</b>re Co<b>m</b>ing S<b>o</b>on!</h1>
                            <TiLocationArrow className='m-5 self-end scale-[5]' />
                        </div>
                    </BentoTilt>
                    <BentoTilt className='bento-tilt_2'>
                        <video
                            loop
                            muted
                            autoPlay
                            className='size-full object-cover object-center'
                            src="videos/feature-5.mp4"></video>
                    </BentoTilt>
                </div>
            </div>
        </section>
    )
}

export default Features





