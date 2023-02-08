import "./App.css";
import GridCmp from "./components/GridCmp/GridCmp";
import { AppBar } from "@mui/material";
import PrimaryButton from "./components/PrimaryButton/PrimaryButton";

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <Counter />
    //     {/* <CustomDiv>
    //       <h2>Neki naslov mnogo dobar</h2>
    //     </CustomDiv> */}
    //   </header>
    // </div>
    <>
      {/* <AppBar /> */}
      {/* <GridCmp></GridCmp> */}
      <PrimaryButton padding={10} borderColor="yellow">
        Primary button
      </PrimaryButton>
    </>
  );
}

export default App;
