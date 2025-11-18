import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./router/AppRouter";
import { MainLayout } from "./layout/MainLayout";

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <AppRouter />
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
