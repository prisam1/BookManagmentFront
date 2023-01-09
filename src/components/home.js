import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'


function Home() {
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="/">Encode</Navbar.Brand>
          <Nav className="d-flex">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/register">Signup</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div className='container' style={{
        height:"70vh",
        marginTop:"5px"
    }}>
       
      </div>
    </>
  )
}

export default Home