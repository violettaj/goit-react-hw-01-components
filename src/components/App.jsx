import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import data from './Statistics/data.json';

export const App = () => {
  return (
    <div>
      <Statistics title="Upload stats" stats={data} />
    </div>
  );
};
