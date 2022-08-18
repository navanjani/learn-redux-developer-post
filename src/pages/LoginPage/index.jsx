import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Container } from "react-bootstrap";
import { Navigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../store/auth/thunks";
import { selectAccessToken } from "../../store/auth/selector";

export default function LoginPage() {
  const initialFormState = {
    email: "kelley@codaisseur.com",
    password: "abcd",
  };
  const [formData, setFormData] = useState(initialFormState);
  const dispatch = useDispatch();
  const accessToken = useSelector(selectAccessToken);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(formData.email, formData.password));
  };

  return (
    <Container>
      {accessToken && <Navigate to="/" />}
      <h1>Login</h1>

      <Form onSubmit={handleSubmit}>
        <Row>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Col>
              <Form.Label>Email address</Form.Label>
            </Col>
            <Col>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </Col>
          </Form.Group>
        </Row>
        <Row>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Col>
              <Form.Label>Password</Form.Label>
            </Col>
            <Form.Control
              type="password"
              placeholder="Password"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
            />
          </Form.Group>
          <Form.Group
            className="mb-3"
            controlId="formBasicCheckbox"
          ></Form.Group>
        </Row>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
}
