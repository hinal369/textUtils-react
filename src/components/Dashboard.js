import { Outlet } from "react-router";

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome to the Dashboard!</p>
      <Outlet />
    </div>
  );
};

export default Dashboard;
