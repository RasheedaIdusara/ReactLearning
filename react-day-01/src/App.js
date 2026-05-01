import logo from './logo.svg';
import './App.css';
import Main from './Component/Main';
import Profile from './Component/Profile';

function App() {
  return (
    <>
    <Profile name="Rasheeda" job="Software Engineer" city = "Colombo">
      I love Coding
    </Profile>

    <Profile name="Nimal" job="Designer" city = "Kandy">
      Creative Mind
    </Profile>

    <Profile name="Saman" job="Teacher" city = "Galle">
      Love Teaching
    </Profile>
    </>
  );
}

export default App;
