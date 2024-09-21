import MainLayout from "./components/Layouts/MainLayout"
import usePreventRefresh from "./redux/usePreventRefresh";

const App = () => {
  usePreventRefresh();
  
  return <MainLayout />
}

export default App
