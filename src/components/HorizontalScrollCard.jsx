import { FaAngleLeft, FaAngleRight } from "react-icons/fa"
import Card from "./Card"
import { useRef } from "react";
import '../App.css'

const HorizontalScollCard = ({data = [], heading, trending, media_type}) => {
    const containerRef = useRef();

    const handleNext = () => {
        containerRef.current.scrollLeft += 300
    }

    const handlePrev = () => {
        containerRef.current.scrollLeft -=300
    }

    return (
        <div className="container mx-auto px-3 my-10">
            <h2 className="text-xl lg:text-2xl font-bold mb-3 capitalize text-white">{heading}</h2>
            
            <div className="relative">
                <div ref={containerRef} className="grid grid-cols-[repeat(auto-fit,230px)] grid-flow-col gap-6 relative overflow-hidden overflow-x-scroll z-10 scroll-smooth transition-all duration-500 scrollbar-none">
                    {
                        data.map((data, index) => {
                            return (
                                <Card key={data.id + "heading" + index} data={data} index={index + 1} trending={trending} media_type={media_type}/>
                            )
                        })
                    }
                </div>

                <div className="absolute top-0 hidden lg:flex justify-between h-full w-full items-center">
                    <button onClick={handlePrev} className="bg-white p-1 text-black rounded-full -ml-1 z-10">
                        <FaAngleLeft/>
                    </button>

                    <button onClick={handleNext} className="bg-white p-1 hover:scale-105 text-black rounded-full -ml-1 z-10">
                        <FaAngleRight/>
                    </button>
                </div>
            </div>
        </div>
    )
}
export default HorizontalScollCard