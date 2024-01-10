import { BrowserRouter } from 'react-router-dom';
import { HeaderComponent } from './featurecomponent/header/header.component';
import logo from './logo.svg';
import { AppRouter } from './app.router';
import { AdminLayout } from './admin/admin-layout/admin-layout.component';


function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <HeaderComponent></HeaderComponent>
        <AppRouter></AppRouter>
       
      </BrowserRouter>

    </div>
  );
}

export default App;
