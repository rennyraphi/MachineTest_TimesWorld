import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button, Row, Col, Container } from 'react-bootstrap';
import { FaFacebookF, FaGoogle, FaTwitter, FaLinkedin  } from 'react-icons/fa';  
import './LoginPage.css';


const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_\-+=<>?{}[\]~])[A-Za-z\d!@#$%^&*()_\-+=<>?{}[\]~]{8,}$/;

    if (!passwordRegex.test(password)) {
      setError('Password must include 1 uppercase letter, 1 number, and 1 symbol.');
      return;
    }
    setError('');
    navigate('/home');
  };

  return (
    <Container fluid className="login-container" style={{ height: '100vh' }}>
      <Row className="h-100">
        <Col md={6} className="c-flex flex-column justify-content-center align-items-start">
          <div className="form-wrapper">
            <h2>Sign In</h2>
            <Form onSubmit={handleLogin}>
              <Form.Group controlId="formEmail">
                <Form.Label>New user? <a href="#create-account"> Create an account</a></Form.Label>
                <Form.Control
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Username or email"
                  className="small-input"
                  required
                />
              </Form.Group>

              <Form.Group controlId="formPassword" className='password'>
                <Form.Control
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  className="small-input"
                  required
                />
              </Form.Group>

              {error && <p className="text-danger">{error}</p>}

              <Form.Group controlId="formCheckbox">
                <Form.Check type="checkbox" label="Keep me signed in" />
              </Form.Group>

              <Button variant="dark" type="submit" className="signin-btn w-100 mt-3">
                Sign In
              </Button>
            </Form>

            <div className="text-center mt-4">
              <p>Or sign in with</p>
              <div className="d-flex justify-content-center">
                <Button variant="outline-dark" className="mx-2">
                  <FaFacebookF />
                </Button>
                <Button variant="outline-dark" className="mx-2">
                  <FaGoogle />
                </Button>
                <Button variant="outline-dark" className="mx-2">
                  <FaTwitter />
                </Button>
                <Button variant="outline-dark" className="mx-2">
                <FaLinkedin/>
                </Button>
              </div>
            </div>
          </div>
        </Col>

        <Col md={6} className="d-none d-md-flex justify-content-center align-items-center">
          <img className = "image" src="../images/login_walking.png" />
        </Col>
      </Row>
    </Container>
  );
};

export default LoginPage;
