import Sidebar from './Sidebar';
import MainContent from './MainContent';

const Layout = () => {
  return (
    <div className="flex flex-row h-screen overflow-hidden">
      
      <Sidebar />
      <MainContent />
    </div>
  );
};

export default Layout;