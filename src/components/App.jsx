import "./App.css";

import Profile from "./Profile/Profile";

import FriendList from "./FriendList/FriendList";

import TransactionHistory from "./TransactionHistory/TransactionHistory";

import userData from "../userData.json";

import friends from "../friends.json";

import transactions from "../transactions.json";

const App = () => {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
        followers={userData.stats.followers}
        views={userData.stats.views}
        likes={userData.stats.likes}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};
export default App;
