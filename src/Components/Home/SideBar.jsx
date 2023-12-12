import dp from '../Home../../../assets/SAVE_20210514_205503-fotor-2023121023542.jpg'
import resume from '../Home../../../assets/Md. Ariful Islam Web Developer.pdf'
import { FaFacebook, FaFileDownload, FaGithub, FaLinkedin } from "react-icons/fa";

const SideBar = () => {
    return (
        <div className='lg:w-[260px] w-full lg:min-h-screen shadow-lg  rounded-2xl shadow-gray-600 lg:mt-6'>
            <div className='flex justify-center pt-10'>
                <img className='w-[170px] h-[170px] rounded-full' src={dp} alt="" />
            </div>
            <div>
                <h2 className='text-center mt-3 text-3xl font-serif'>Md. Ariful Islam </h2>
                <div className='w-[180px] mx-auto'>
                    <p className='border rounded-badge text-white  bg-gradient-to-r from-sky-500 to-indigo-500 p-1 mt-2 font-medium border-blue-500 text-center  w-[180px]'>Web Developer</p>
                </div>

                <p className='bg-gray-500 text-white mt-3 p-3 rounded text-center text-[15px] font-semibold'>Passionate web developer keen on learning and exploring. Dedicated to creating impactful and user-friendly solutions.</p>

                {/* Resume */}
                <div className='w-[180px] mx-auto m-3'>
                    <a
                        href={resume}
                        download="Md Ariful Islam Web Developer.pdf"
                        className="flex items-center justify-center p-1  font-medium text-white  bg-gradient-to-r from-sky-500 to-indigo-500 rounded-full cursor-pointer border border-blue-500"
                    >
                        <FaFileDownload className='w-[10px]'></FaFileDownload>
                        <span className='ml-2'>Download Resume</span>
                    </a>
                </div>
                <div className='flex justify-evenly mt-6 mb-12'>
                    <a href="https://www.facebook.com/arifulislam.ariful.37/"><FaFacebook className='text-blue-600 text-3xl'></FaFacebook></a>
                    <a href="https://www.linkedin.com/in/mai25cse/"><FaLinkedin className='text-blue-600 text-3xl'></FaLinkedin></a>
                    <a href="https://github.com/Ariful2634"><FaGithub className='text-3xl'></FaGithub></a>
                </div>
            </div>

        </div>
    );
};

export default SideBar;