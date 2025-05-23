
import {ComponentCount} from "./components/ComponentCount/ComponentCount.jsx";
import {ComponentShowText} from "./components/ComponentShowText/ComponentShowText.jsx";
import {ComponentInput} from "./components/ComponentInput/ComponentInput.jsx";
import {ComponentChangeColor} from "./components/ComponentChangeColor/ComponentChangeColor.jsx";
import {ParentComponent} from "./components/ParentComponent/ParentComponent.jsx";

function App() {

  return (
    <div>
        <ComponentCount />
        <ComponentShowText />
        <ComponentInput />
        <ComponentChangeColor />
        <ParentComponent />
    </div>
  );
}

export default App;
