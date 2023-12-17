import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav>

        <Link to='/' >Home</Link>
        <Link to='/experiment-one' >Experiment One</Link>
        <Link to='/experiment-two'>Experiment Two</Link>
        <Link to='/experiment-three' >Experiment Three</Link>
        <Link to='/experiment-four' >Experiment Four</Link>
        <Link to='/experiment-five' >Experiment Five</Link>
        <Link to='/experiment-six' >Experiment Six</Link>

    </nav>
  )
}

export default Navbar
