"use client"
import Marquee from "react-fast-marquee"


export default function MarqueeStyled({
    children,
}: {
    children: React.ReactNode,
}) {
  return (
    <div
        className='sticky top-0 z-30 h-[5vh]'
    >
        <div
            style={{
                background: "linear-gradient(45deg,#eb5d47,#a933b2,#a4f9ff)",
            }}
            className="w-full p-[.5rem] h-full"
        >
            <Marquee
                className='bg-transparent'
                gradient={false}
                speed={100}
                gradientWidth={20}
                pauseOnHover={true}

            >
                {
                    children
                }
            </Marquee>
        </div>
    </div>
  )
}
