import { Outlet } from "react-router"
import Header from "./components/Header"
import Footer from "./components/Footer"
import MobileNavigation from "./components/MobileNavigation"
import axios from "axios"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { setBarnerData,setImageUrl } from "./store/movieoSlice"
const App = () => {

  const dispatch = useDispatch();

  const fetchTrendingData = async() => {
    try {
      const response = await axios.get('/trending/all/week');

      dispatch(setBarnerData(response.data.results))

      console.log('response', response.data.results)
    } catch(error) {
      console.error(error)
    }
  }
  
  const fetchConfiguration = async () => {
    try {
      const response = await axios.get('/configuration')

      dispatch(setImageUrl(response.data.images.secure_base_url+"original"))
      console.log('Config', response)
    } catch(err) {
      console.error(err)
    }
  } 

  useEffect(() => {
    fetchTrendingData()
    fetchConfiguration()
  }, []);

  return (
    <main className="pb-14 lg:pb-0">
      <Header/>
        <div className="min-h-[90vh]">
          <Outlet/>
        </div>
      <Footer/>
      <MobileNavigation/>
    </main>
  )
}
export default App