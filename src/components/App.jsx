import User from "./User/User";
import {Statistics} from "./Statistics/Statistics";
import {FriendList} from "./Friends/FriendList";
import {TransactionStory} from "./Transactions/Transactions";

import user from './Data/user.json';
import data from './Data/data.json';
import friends  from "./Data/friends.json";
import transactions from './Data/transactions';

export const App = () => {
  return (
    <div>
      <User
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionStory items={transactions} />
    </div>
  );
};
