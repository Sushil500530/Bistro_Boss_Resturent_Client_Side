/* eslint-disable react/prop-types */
import { Parallax } from 'react-parallax';
const Cover = ({ img, coverTitle, }) => {
    return (
        <Parallax
            blur={{ min: -50, max: 50 }}
            bgImage={img}
            bgImageAlt="the menu"
            strength={-200}
        >
            <div className=" h-[700px] hero" >
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold uppercase">{coverTitle}</h1>
                        <p className="mb-5 text-[24px] font-bold">Would you like to try a dish?</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </Parallax>

    );
};

export default Cover;