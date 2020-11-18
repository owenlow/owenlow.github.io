import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Nav, Navbar, NavDropdown, Container} from 'react-bootstrap'

export default function Home() {
    return (
        <>
            <Head>
                <title>owen's site</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">Owen's site</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link>
                        <NavDropdown title="Projects" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider/>
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

            <Container>
                <p>
                    My name is Owen, I make websites!
                </p>
            </Container>

            <footer className={"my-5 pt-5 text-muted text-center text-small"}>
                <p className={"mb-1"}>
                    Created by owenlow
                </p>
            </footer>
        </>
    )
}
