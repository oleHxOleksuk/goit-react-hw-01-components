import User from "./User/User";
import {Statistics} from "./Statistics/Statistics";

import user from './Data/user.json';
import data from './Data/data.json';

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
    </div>
  );
};
