interface props {
    image: string,
    character: string,
    quote: string
}
const Card = ({image, character, quote}: props)=>{
    return (
            <div className='w-full max-w-md h-[100%] mx-auto bg-white rounded-3xl shadow-xl overflow-hidden border'>
                <div className='max-w-md mx-auto'>
                    <div className='h-[236px]' style={{backgroundImage: `url(${image})`, backgroundSize: 'contain', backgroundPosition: 'center' , backgroundRepeat: 'no-repeat'}}>
                    </div>
                    <div className='p-4 sm:p-6'>
                        <p className='font-bold text-gray-700 text-[22px] leading-7 mb-1'>{character}</p>
                        <p className='text-[#7C7C80] font-[15px] mt-6'>{quote}</p>
                    </div>
                </div>
            </div>
    )
}

export default Card