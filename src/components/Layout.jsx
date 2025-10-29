import { useNavigate } from "react-router-dom"
import "./Layout.css"

const Layout = () => {
    const navigate= useNavigate()
  return (
    <div className="layout">
      <div className='leftSide'>
        <div className='logo'>
          <img src="src/assets/Resim1.jpg" alt="resim bulunamadı" />
        </div>
      </div>
      <div className='rightSide'>
        <button onClick={() => navigate("/")}>Home</button>

        <button onClick={()=> navigate("/about")}>About</button>

        <button onClick={()=> navigate("/projects")}>Projects</button>

        <button onClick={()=> navigate("/contact")}>Contact</button>
     </div>

    </div>
  )
}

export default Layout