import { Link, Outlet } from "react-router-dom"

export default function Grid() {
  return(
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/detalhes-sobre/arroz">Saber sobre arroz</Link>
          </li>
          <li>
            <Link to="/sobre-nos">About</Link>
          </li>
          <li>
            <Link to="/calendario-de-plantio">Calendario</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  )
}
