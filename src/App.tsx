import { UserList } from "./components/UserList";
import { Like } from "./components/Like";
import { BreadCrumbs } from "./components/BreadCrumbs";
import { UserDetail } from "./components/UserDetail";
import { PrimaryButton } from "./components/PrimaryButton";
import { Form } from "./components/Form";
import { PostList } from "./components/PostList";

const App = () => {
  const items1 = ["Home1", "Library1", "Date1"];
  const items2 = ["Home2", "Library2", "Date2"];

  return (
    <div>
      <BreadCrumbs items={items1} />
      <BreadCrumbs items={items2} />
      <BreadCrumbs items={[]} />
      <UserDetail />
      <PrimaryButton>
        button<span>1</span>
      </PrimaryButton>
      <PrimaryButton>
        button<span>2</span>
      </PrimaryButton>
      <div>
        <Like />
      </div>
      <UserList />
      <Form />
      <PostList />
    </div>
  );
};

export default App;
