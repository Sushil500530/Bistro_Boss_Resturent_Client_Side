/* eslint-disable react/prop-types */

const SectionTitle = ({heading,subHeading}) => {
    return (
        <div className='text-center my-8'>
            <p className="text-xl font-medium  mb-5 text-[#D99904]">---{subHeading}---</p>
            <hr className='w-1/2 border-2 mx-auto border-gray-300' />
            <h1 className='text-[40px] font-bold py-2'>{heading}</h1>
            <hr className='w-1/2 border-2 mx-auto border-gray-300' />
        </div>
    );
};

export default SectionTitle;