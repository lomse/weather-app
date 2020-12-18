import Search from "./components/Search";
import WeatherInfo from "./components/WeatherInfo";
import Wrapper from './components/elements/Wrapper';


const App = () => {
  return (
    <Wrapper>
      <Search />
      <WeatherInfo />
    </Wrapper>
  );
}

export default App
