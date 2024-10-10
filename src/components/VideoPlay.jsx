import { IoClose } from "react-icons/io5"
import useFetchDetails from "../hooks/useFetchDetails"
const VideoPlay = ({data, close, media_type}) => {
    const { data: videoData } = useFetchDetails(`/${media_type}/${data?.id}/videos`)
    return (
        <section className="fixed bg-neutral-700 right-0 top-0 flex justify-center items-center bottom-0 left-0 bg-opacity-50 z-50">
            <div className="bg-black w-full max-h-[50vh] max-w-screen-lg aspect-video rounded relative"></div>
                <h2>My name is Bridget</h2>
            <button className="text-2xl absolute right-20 top-16 z-50" onClick={close}><IoClose/></button>

            <iframe src={`https://www.youtube.com/embed/${videoData?.results[0]?.key}`} className="w-full text-2xl h-'full"/>
        </section>
    )
}
export default VideoPlay

