import moment from "moment";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Badge from "react-bootstrap/Badge";
import { Card } from "react-bootstrap";
import "./style.scss";
const PostCard = ({ title, createdAt, tags }) => {
  return (
    <Card className="post-card shadow bg-white rounded">
      <h2>{title}</h2>
      <Row>
        <Col md={2}>
          <p>{moment(createdAt).format("MMMM Do YYYY")}</p>
        </Col>
        <Col>
          <div className="post-tag">
            {tags.map((tag) => (
              <Badge bg="primary" style={{ marginRight: "5px" }}>
                {tag.tag}
              </Badge>
            ))}
          </div>
        </Col>
      </Row>
    </Card>
  );
};
export default PostCard;
