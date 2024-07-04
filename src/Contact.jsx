
import { FaEnvelope, FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';
import Email from './Email';

const Contact = () => {
    return (
        <div className="" id="">
            <div className=''>
            <h2 className="hover:text-blue-600 text-xl text-center md:text-[40px]  font-bold mb-10"> Contact </h2>
            <div className="flex justify-center items-center space-x-6 mb-20">
                <a href="mailto:mimislam878@gmail.com" target="_blank" rel="noopener noreferrer" className="text-3xl text-blue-600">
                    <FaEnvelope />
                </a>
                <a href="https://www.facebook.com/profile.php?id=100009666887837" target="_blank" rel="noopener noreferrer" className="text-3xl text-blue-600">
                    <FaFacebook />
                </a>
                <a href="https://github.com/MimFSD" target="_blank" rel="noopener noreferrer" className="text-3xl text-gray-800">
                    <FaGithub />
                </a>
                <a href="https://www.linkedin.com/in/mim-islam-b97406316/" target="_blank" rel="noopener noreferrer" className="text-3xl text-blue-800">
                <FaLinkedin />

                </a>
            </div>
            </div>

            <section className=''>
                <Email></Email>
            </section>
        
        </div>
    );
};

export default Contact;