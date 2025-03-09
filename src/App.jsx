import { Provider } from "react-redux";
import Header from "./components/Header";
import InputData from "./components/InputData";
import PreviewData from "./components/PreviewData";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <Header />
      <div>
        <InputData />
        <PreviewData />
      </div>
    </Provider>
  );
}

export default App;
