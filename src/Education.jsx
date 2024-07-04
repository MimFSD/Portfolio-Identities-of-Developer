
import { FaSchool, FaUniversity } from 'react-icons/fa';

const Education = () => {
    return (
        <div className="section education-section mx-auto md:mx-10 lg:mx-14  mb-20" id="">
            <h2 className="hover:text-blue-600 text-xl text-center md:text-[40px]  font-bold mb-10"> Education </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                <div className="base-100 border-2 border-blue-400 hover:border-cyan-300 p-6 rounded-lg shadow-lg hover:shadow-2xl hover:bg-cyan-400 transition-shadow duration-500">
                    <FaUniversity ></FaUniversity>
                    <h4 className="text-xl font-bold mb-2">Hajee Mohammad Danesh Science and Technology University(HSTU)</h4>
                    <p className="mb-2"><strong>Degree:</strong> Bachelor of Science in Computer Science and Engineering(CSE)</p>
                    <p className="mb-2"><strong>Duration:</strong> January 2021 - Present</p>
                    <p className="mb-2"><strong>Location:</strong> Dinajpur, Bangladesh</p>
                </div>
                <div className="bg-base-100 border-2 border-blue-400 hover:border-cyan-300 p-6 hover:shadow-2xl hover:bg-cyan-400 rounded-lg shadow-lg transition-shadow duration-300">
                    <FaSchool className='' />
                    <h4 className="text-xl font-bold mb-2">Thakurgaon Government College</h4>
                    <p className="mb-2"><strong>Group:</strong> Science</p>
                    <p className="mb-2"><strong>Degree:</strong> Higher Secondary School(HSC)</p>
                    <p className="mb-2"><strong>Duration:</strong> 2016- 2018</p>
                    <p className="mb-2"><strong>Location:</strong> Thakurgaon, Bangladesh</p>
                </div>
                <div className="bg-base-100 border-2 border-blue-400 hover:border-cyan-300 p-6 hover:shadow-2xl hover:bg-cyan-400 rounded-lg shadow-lg transition-shadow duration-300">
                    <FaSchool className='' />
                    <h4 className="text-xl font-bold mb-2">Thakurgaon Govt. Boys' High School</h4>
                    <p className="mb-2"><strong>Group:</strong> Science</p>
                    <p className="mb-2"><strong>Degree:</strong> Secondary School Certificate (SSC)</p>
                    <p className="mb-2"><strong>Duration:</strong> 2014- 2016</p>
                    <p className="mb-2"><strong>Location:</strong> Thakurgaon, Bangladesh</p>
                </div>

            </div>
        </div>
    );
};

export default Education;
