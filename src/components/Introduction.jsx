import React from 'react'
import myImage from '../../public/myImage.png'
const resumeUrl = `${import.meta.env.BASE_URL}resume/resume.pdf`
const Introduction = () => {
    const downloadResume = (url)=>{
        const fileName=url.split("/").pop();
        const aTag = document.createElement("a");
        aTag.href=url;
        aTag.setAttribute("download",fileName);
        document.body.appendChild(aTag);
        aTag.click();
        aTag.remove();
    }
    return (
        <div className=''>
            <div className="xs:ml-11 mt-10 xs:mr-11 mr-0 ml-0 sm:ml-11 sm:mr-11 mb-11 flex justify-between flex-wrap bg-no-repeat bg-cover px-6 py-9 rounded-sm bg-[url('https://image.shutterstock.com/image-photo/boy-walking-universe-260nw-2486567269.jpg')]">
                <div className='flex flex-wrap items-center'>
                    <img src={myImage} className='h-28 w-28 rounded-full' alt='image'/><div className='sm:ml-6 ml-3 text-2xl text-white font-semibold'><span className='robotoFont'>Sujan Chaudhary</span><div className='text-sm opacity-60'>Self Inspired <span className='underline'> Software Engineer</span></div></div>
                </div>
                <div className='flex items-center mx-2'>
                    <button onClick={()=>{downloadResume(resumeUrl)}} className='sm:mt-1 mt-5 py-1 px-3 sm:ml-0 ml-1 rounded-sm bg-green-500 text-white text-opacity-100'>
                        Resume
                    </button>
                </div>
            </div>
            </div>
    )
}

export default Introduction