import moment from "moment";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Badge from "react-bootstrap/Badge";
import { Card } from "react-bootstrap";
import "./style.scss";
import { Link } from "react-router-dom";
const PostCard = ({ title, createdAt, tags, id }) => {
  return (
    <Card className="post-card shadow bg-white rounded">
      <Link to={`/post/${id}`}>
        <h2>{title}</h2>
      </Link>
      <Row>
        <Col md={2}>
          <p>{moment(createdAt).format("MMMM Do YYYY")}</p>
        </Col>
        <Col>
          <div className="post-tag">
            {tags.map((tag) => (
              <Badge key={tag.id} bg="primary" style={{ marginRight: "5px" }}>
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
