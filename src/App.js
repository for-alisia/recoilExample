import { RecoilRoot } from 'recoil';
import { Tabs } from 'antd';
import Header from './components/Header';
import Todo from './components/Todo';
import CurrencyExchange from './components/CurrencyExchange';
import GoalsList from './components/GoalsList';
import Users from './components/Users';
import './App.css';

function App() {
  return (
    <RecoilRoot>
      <div className="todoApp">
        <Header />
        <main className="main">
          <Tabs defaultActiveKey="1">
            <Tabs.TabPane tab="Todo" key="1">
              <Todo />
            </Tabs.TabPane>
            <Tabs.TabPane tab="Currency" key="2">
              <CurrencyExchange />
            </Tabs.TabPane>
            <Tabs.TabPane tab="Goals" key="3">
              <GoalsList />
            </Tabs.TabPane>
            <Tabs.TabPane tab="Users" key="4">
              <Users />
            </Tabs.TabPane>
          </Tabs>
        </main>
      </div>
    </RecoilRoot>
  );
}

export default App;
