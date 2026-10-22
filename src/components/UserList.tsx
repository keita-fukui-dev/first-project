import { useState } from "react";

type User = {
  id: number;
  name: string;
  isLogin: boolean;
};

export const UserList = () => {
  const [userList, setUserList] = useState<User[]>([
    { id: 1, name: "太郎", isLogin: false },
    { id: 2, name: "次郎", isLogin: false },
    { id: 3, name: "三郎", isLogin: false },
  ]);

  const handleLogin = (index: number) => {
    const newUserList = [...userList];
    newUserList[index].isLogin = true;
    setUserList(newUserList);
  };

  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">id</th>
          <th scope="col">名前</th>
          <th scope="col">ログイン状態</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        {userList.map((user, index) => (
          <tr key={user.id}>
            <th scope="row">{user.id}</th>
            <td>{user.name}</td>
            <td>{user.isLogin ? "ログイン中" : "未ログイン"}</td>
            <td>
              <button
                className="btn btn-primary"
                onClick={() => handleLogin(index)}
              >
                ログイン
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
