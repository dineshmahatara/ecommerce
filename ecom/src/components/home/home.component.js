import { Navbar, Nav, Container, Row, Col } from "react-bootstrap"
import logo from "../../assets/image/logo.png"
import { FaMapMarked, FaPhoneAlt } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import { logoutUser } from "../../reducers/user.reducer";

export const HeaderComponent = () => {
    //let loggedUser = JSON.parse(localStorage.getItem("mern15_user"));
    let dispatch = useDispatch();

    let loggedUser = useSelector((store) =>{
        return store.user.loggedInUser;
    })

    let cartItemCount = useSelector((store) => {
        
        if(store.cart.cart && store.cart.cart.length){
            let count = 0;
            store.cart.cart.map((item) => {
                count += Number(item.qty);
            })
            return count;
        }
    })
    

    const logout = () => {
        dispatch(logoutUser())
    }

    return (<>
        {/* Nav Section Start */}
        <Navbar bg="light" variant="light" style={{ maxHeight: "30px" }}>
            <Container>

                <Row>
                    <Col className="py-2">
                        <span className="me-3"><FaPhoneAlt /> <span className="text-dark">+977 1234567890</span></span>
                        <span><FaMapMarked /></span>
                    </Col>

                </Row>
            </Container>
        </Navbar>
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">
                    <img alt="Logo" src={logo} className="img img-fluid logo-image" />
                </Navbar.Brand>
                <Nav className="me-auto">
                    <NavLink className={"nav-link"} to="/">Home</NavLink>
                    <Nav.Link href="#features">Category</Nav.Link>
                    <Nav.Link href="#pricing">Products</Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link href="/cart">Cart ({cartItemCount})</Nav.Link>

                    {
                        loggedUser ? <>
                            <NavLink className={"nav-link"} to={"/"+loggedUser.role}>{loggedUser.name}</NavLink>
                            <Nav.Link href="#pricing" onClick={logout}>Logout</Nav.Link>
                        </> : <>
                            <NavLink className={"nav-link"} to="/login">Login</NavLink>
                            <NavLink className={"nav-link"} to="/register">Register</NavLink>
                        </>
                    }
                </Nav>
            </Container>
        </Navbar>
        {/* Nav Section Ends */}
    </>)
}

export const FooterComponent = () => {
    // 
    return (<>
        <footer className="bg-dark">
            <Container fluid>
                <Row>
                    <Col sm={12} lg={4}>
                        First Col
                    </Col>
                    <Col sm={12} lg={4}>
                        Second Col
                    </Col>
                    <Col sm={12} lg={4}>
                        Third Col
                    </Col>
                </Row>
            </Container>
        </footer>
    </>)
}