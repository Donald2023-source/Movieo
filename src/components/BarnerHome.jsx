    import React, { useState, useEffect } from 'react'
    import { useSelector } from 'react-redux'
    import { FaAngleRight, FaAngleLeft} from 'react-icons/fa'

    const BarnerHome = () => {

        const barnerData = useSelector(state => state.movieoData.barnerData );
        const imageUrl = useSelector(state => state.movieoData.imageUrl);

        const [currentImage, setCurrentImage] = useState(0);


        const handleNext = () => {
            if(currentImage < barnerData.length -1){
                setCurrentImage((prev) => prev + 1)
            }
        }

        const handlePrev = () => {
            if(currentImage > 0){
                setCurrentImage((prev) => prev - 1)
            }
        }



        useEffect(() => {
            const interval = setInterval(() => {
                if(currentImage < barnerData.length -1) {
                    handleNext()
                } else {
                    setCurrentImage(0)
                }
            }, 5000)
            return () =>  clearInterval(interval)
        }, [barnerData, imageUrl, currentImage])

    return (
        <section className="w-full h-full">
            <div className='flex min-h-full max-h-[95vh] overflow-hidden'>
                {
                    barnerData.map((data, index) => {
                        return  (
                            <div key={index} className='min-w-full min-h-[450px] lg:min-h-full relative group transition duration-700' style={{ transform: `translate(-${currentImage * 100}%)`}}>
                                <div className='w-full h-full'>
                                    <img src={imageUrl + data.backdrop_path } className='h-full object-cover w-full'/>
                                </div>

                                {/* {button next anad prev} */}

                                <div className='absolute top-0 h-full w-full items-center justify-between px-4 hidden group-hover:lg:flex'>
                                    <button onClick={handlePrev} className='bg-white text-black z-10 p-1 rounded-full text-xl '><FaAngleLeft/></button>
                                    <button onClick={handleNext} className='bg-white text-black z-10 p-1 rounded-full text-xl '><FaAngleRight/></button>
                                </div>
                                <div className='absolute top-0 w-full h-full bg-gradient-to-t from-neutral-900'/>

                                <div className='container mx-auto'>
                                    <div className='px-3 w-full absolute bottom-0 max-w-md'>
                                        <h2 className='font-bold text-2xl lg:text-4xl text-white drop-shadow-md'>{data.name || data.title}</h2>
                                        <p className='text-ellipsis line-clamp-3 my-2'>{data.overview}</p>
                                        <div className='flex items-center gap-4'>
                                            <p>Rating: {Number(data.vote_average).toFixed(1)} +</p>
                                            <span>|</span>
                                            <p>View: { Number(data.popularity).toFixed(0) }</p>
                                        </div>
                                        <button className='bg-white  hover:bg-gradient-to-l from-red-700 to-red-500 shadow-md px-4 py-2 font-semibold text-black rounded mt-4 transition-all hover:scale-105'>Play now</button>
                                    </div>
                                </div>
                            
                            </div>

                        )
                    })
                }
            </div>
        </section>
    )
    }

    export default BarnerHome