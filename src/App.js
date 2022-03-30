import { RecoilRoot } from 'recoil';
import { Tabs } from 'antd';
import Header from './components/Header';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import Settings from './components/Settings';
import TodoSteps from './components/Steps';
import CurrencyExchange from './components/CurrencyExchange';

import './App.css';
import GoalsList from './components/GoalsList';

function App() {
  return (
    <RecoilRoot>
      <div className="todoApp">
        <Header />
        <main className="main">
          <Tabs defaultActiveKey="1">
            <Tabs.TabPane tab="Todo" key="1">
              <h2>TODO LIST</h2>
              <AddTodo />
              <TodoSteps />
              <Settings />
              <TodoList />
            </Tabs.TabPane>
            <Tabs.TabPane tab="Currency" key="2">
              <CurrencyExchange />
            </Tabs.TabPane>
            <Tabs.TabPane tab="Goals" key="3">
              <GoalsList />
            </Tabs.TabPane>
          </Tabs>
        </main>
      </div>
    </RecoilRoot>
  );
}

export default App;
