import { useState, type SubmitEvent, type ChangeEvent } from "react";

type User = {
  name: string;
  email: string;
  password: string;
  isMagazine: boolean;
};

export const Form = () => {
  const [newUser, setNewUser] = useState<User>({
    name: "",
    email: "",
    password: "",
    isMagazine: false,
  });

  const onChangeNewUser = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setNewUser({ ...newUser, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(newUser);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="nameForm" className="form-label">
          名前
        </label>
        <input
          name="name"
          type="text"
          className="form-control"
          id="nameForm"
          value={newUser.name}
          onChange={onChangeNewUser}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="emailForm" className="form-label">
          メールアドレス
        </label>
        <input
          name="email"
          type="email"
          className="form-control"
          id="emailForm"
          value={newUser.email}
          onChange={onChangeNewUser}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">
          パスワード
        </label>
        <input
          name="password"
          type="password"
          className="form-control"
          id="password"
          value={newUser.password}
          onChange={onChangeNewUser}
        />
      </div>
      <div className="mb-3 form-check">
        <input
          name="isMagazine"
          type="checkbox"
          className="form-check-input"
          id="isMagazineCheck"
          checked={newUser.isMagazine}
          onChange={onChangeNewUser}
        />
        <label className="form-check-label" htmlFor="isMagazineCheck">
          メールマガジンを希望する
        </label>
      </div>
      <button type="submit" className="btn btn-primary">
        送信
      </button>
    </form>
  );
};
