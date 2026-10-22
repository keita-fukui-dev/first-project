import { usePostList } from "../hooks/usePostList";

export const PostList = () => {
  const { postList, userId, errorMessage, setUserId } = usePostList();

  return (
    <div>
      <h2>PostList</h2>
      <div>
        <p>userID: {userId}</p>
        <input
          type="number"
          value={userId}
          onChange={(e) => setUserId(Number(e.target.value))}
        />
      </div>
      {errorMessage !== "" && (
        <div className="alert alert-danger" role="alert">
          {errorMessage}
        </div>
      )}
      <table className="table">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">ユーザーid</th>
            <th scope="col">タイトル</th>
            <th scope="col">内容</th>
          </tr>
        </thead>
        <tbody>
          {postList
            .filter((post) => post.userId === userId)
            .map((post) => (
              <tr key={post.id}>
                <td>{post.id}</td>
                <td>{post.userId}</td>
                <td>{post.title}</td>
                <td>{post.body}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};
