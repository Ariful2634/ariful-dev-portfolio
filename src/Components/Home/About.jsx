
import Lottie from 'react-lottie';
import loti from '../../assets/Animation - 1702319763376.json'
import 'aos/dist/aos.css';

const About = () => {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: loti,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    return (
        <div data-aos="zoom-in">
            <div className='flex lg:flex-row flex-col items-center mt-6'>
                <div>
                    <p className='font-bold text-xl lg:text-2xl font-serif'>Hello, I am <span className='text-blue-600 italic'>Md. Ariful Islam</span></p>
                    <p className='font-semibold'>Web developer with expertise in HTML, CSS, Tailwind, JavaScript, React, MongoDB, and Express. I create user-friendly websites and applications, combining design and functionality for a seamless user experience.</p>
                </div>
                <div>
                    <Lottie options={defaultOptions}
                        height={350}
                        width={350}
                    />
                </div>
            </div>
            {/* <div>
                <div>
                    <p className='font-bold text-xl lg:text-2xl font-serif'>Hello, I am <span className='text-blue-600 italic'>Md. Ariful Islam</span></p>
                    <p className='font-semibold'>Web developer with expertise in HTML, CSS, Tailwind, JavaScript, React, MongoDB, and Express. I create user-friendly websites and applications, combining design and functionality for a seamless user experience.</p>
                </div>
               
            </div>
             <div>
                    <Lottie options={defaultOptions}
                        height={400}
                        width={400}
                    />
                </div> */}
            <div>
                <h1 className='font-bold text-2xl text-blue-600'>Education:</h1>
                <p className='font-bold'>Computer Science and Engineering</p>
                <p className='font-bold'>Bangladesh University of Business and Technology (2019-2023)</p>
            </div>

        </div>
    );
};

export default About;