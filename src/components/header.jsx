import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className="header">
      <h1>SuperDevguy</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
}
