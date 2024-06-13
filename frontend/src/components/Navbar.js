import { useState, useEffect } from "react"
import { Link, useNavigate } from 'react-router-dom'
import { Navbar, Nav, Form, FormControl } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShop, } from '@fortawesome/free-solid-svg-icons';
import OffCanvas from '../components/Cart'

const options = [
  {
    name: 'Enable both scrolling & backdrop',
    scroll: true,
    backdrop: true,
  },
];
const Navbars = () => {

    const [searchBarWidth, setSearchBarWidth] = useState('500px')
    const [searchQuery, setSearchQuery] = useState("")
    const [show, setShow] = useState(false);
    const navigate = useNavigate()

    const handleClose = () => setShow(false);
    const toggleShow = () => setShow((s) => !s);

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value)
    }

    const handleSearchSubmit = (event) => {
        event.preventDefault()
        navigate(`/search/${searchQuery}`)
        setSearchQuery("")
    }

    useEffect(() => {
        const handleResize = () => {
            if(window.innerWidth < 900){
                setSearchBarWidth('370px')
            }
            else{
                setSearchBarWidth('500px')
            }
        }
        
        window.addEventListener('resize', handleResize)

        handleResize()

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    return(
        <Navbar expand="md" className='nav'>
            <Navbar.Brand>       
                <Link to="/" className="nav-link px-0 logo"><FontAwesomeIcon className="pl-1" icon={faShop} /> B-commerce</Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse>
                <Form className="mx-auto my-2 my-lg-0 searchbar" onSubmit={handleSearchSubmit} id="searchQuery">
                    <FormControl type="text" name="searchQuery" placeholder="Search" className="mr-sm-2" style={{ width: searchBarWidth }} onChange={handleSearchChange} value={searchQuery} />
                </Form>
                <Nav className="ml-auto align-items-center">
                    <Link to="/categories/all" className="nav-link">Categories</Link>
                    <Link to="/" className="nav-link">Sign In</Link>
                    <OffCanvas show={show} placement={'end'} onShow={toggleShow} onClose={handleClose} {...options[0]} />
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Navbars