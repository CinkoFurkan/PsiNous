import Button from "../../../../components/button";
import { Link } from "react-router-dom";

const Extra = ({ blog }) => {
  return (
    <div className="flex flex-col items-center justify-center p-4 flip-card-back">
      <p className="text-sm">{blog.short_text}</p>
      <Button
        as={Link}
        to={`/blog/${blog.blog_id}`}
        variant="primary"
        size="normal"
      >
        Daha Fazla
      </Button>
    </div>
  );
};

export default Extra;
