import {
  EllipsisOutlined,
  HeartOutlined,
  MessageOutlined,
  RetweetOutlined,
  HeartTwoTone,
} from "@ant-design/icons";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { Card, Popover, Button, Avatar } from "antd";
import PostImages from "./PostImages";
import { useCallback, useState } from "react";

const PostCard = ({ post }) => {
  const [liked, setLiked] = useState(false);
  const [commonFormOpened, setCommonFormOpened] = useState(false);
  const onToggleLike = useCallback(() => {
    setLiked((prev) => !prev);
  }, []);
  const onToggleComment = useCallback(() => {
    setCommonFormOpened((prev) => !prev);
  });
  const id = useSelector((state) => state.user.me?.id);
  return (
    <div style={{ marginBottom: 20 }}>
      <Card
        cover={post.Images[0] && <PostImages images={post.Images} />}
        actions={[
          <RetweetOutlined key="retweet" />,
          liked ? (
            <HeartTwoTone
              twoToneColor="#eb2f96"
              key="heart"
              onClick={onToggleLike}
            />
          ) : (
            <HeartOutlined key="heart" onClick={onToggleLike} />
          ),

          <MessageOutlined key="comment" onClick={onToggleComment} />,
          <Popover
            key="more"
            content={
              <Button.Group>
                {id && post.User.id === id ? (
                  <>
                    <Button>수정</Button>
                    <Button type="danger">삭제</Button>
                  </>
                ) : (
                  <Button>신고</Button>
                )}
              </Button.Group>
            }
          >
            <EllipsisOutlined />
          </Popover>,
        ]}
      >
        <Card.Meta
          avatar={<Avatar>{post.User.nickname[0]}</Avatar>}
          title={post.User.nickname}
          description={post.content}
        />
      </Card>
      {commonFormOpened && <div>댓글 부분</div>}
      {/* <CommentForm />
      <Comments /> */}
    </div>
  );
};

// PostCard.propTypes = {
//   post: PropTypes.object.isRequired,
// };

export default PostCard;
