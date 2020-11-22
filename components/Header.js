import styles from './Header.module.css';
import Link from 'next/link';
import {Nav, Navbar} from "react-bootstrap";
import paths from '../constants/paths';

export default function Header({currentPage}) {
    return (
        <header>
            <Navbar className={styles.navbar} expand="lg">
                <Navbar.Brand href={paths.landing.url}>owenlow.com</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <ul className="navbar-nav ml-auto">
                        {Object.values(paths).map(pathData =>
                            <Link href={pathData.url} key={pathData.id} passHref>
                                <Nav.Link active={pathData.id === currentPage}>
                                    {pathData.name}
                                </Nav.Link>
                            </Link>
                        )}
                    </ul>
                </Navbar.Collapse>
            </Navbar>
        </header>
    );
}