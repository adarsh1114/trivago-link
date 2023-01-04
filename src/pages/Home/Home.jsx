import "./Home.css"
import Navbar from "../../components/navbar/Navbar";
import Headers from "../../components/header/headers";
import Featured from "../../components/featured/Featured";
import PropertyList from "../../components/propertylist/propertylist";
import About from "../../components/about/about";
import Footer from "../../components/footer/footer";
const Home = () => {
  return (
    <div>
      <Navbar/>
      <Headers/>
      <div className="homeContainer">
        <Featured/>
        <h1 className="title">Popular Serches</h1>
        <PropertyList/>
      </div>
      <About/>
      <div className="footer">
      <Footer/>
      </div>
    </div>
  )
}

export default Home
