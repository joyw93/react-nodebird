import AppLayout from "../components/AppLayout";
import NicknameEditForm from "../components/NicknameEditForm";
import FollowList from "../components/FollowList";

const Profile = () => {
  const followerList = [
    { nickname: "제로초" },
    { nickname: "제로초2" },
    { nickname: "제로초3" },
  ];
  const followingList = [
    { nickname: "제로초" },
    { nickname: "제로초2" },
    { nickname: "제로초3" },
  ];

  return (
    <>
      <AppLayout>
        <NicknameEditForm />
        <FollowList header="팔로잉 목록" data={followingList} />
        <FollowList header="팔로워 목록" data={followerList} />
      </AppLayout>
    </>
  );
};

export default Profile;
