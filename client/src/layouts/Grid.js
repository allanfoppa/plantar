import { Outlet } from "react-router-dom"
import NavBarWithScroll from "../components/Navbar"

export default function Grid() {
  return(
    <div>
      <NavBarWithScroll />
      <Outlet />
    </div>
  )
}
