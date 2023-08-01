import { Outlet } from "react-router-dom"
import NavBarWithScroll from "./Navbar"

export default function Grid() {
  return(
    <div>
      <NavBarWithScroll />
      <Outlet />
    </div>
  )
}
