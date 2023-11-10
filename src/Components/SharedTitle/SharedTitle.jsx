
const SharedTitle = ({heading , subHeading}) => {
    return (
        <div className='text-center py-20'>
            <p className='text-xl font-normal text-[#D99904] mb-4 '>{subHeading}</p>
            <hr className='w-[424px] h-1 mx-auto' />
            <h2 className='text-4xl font-normal my-4'>{heading}</h2>
            <hr className='w-[424px] h-1 mx-auto' />
        </div>
    );
};

export default SharedTitle;