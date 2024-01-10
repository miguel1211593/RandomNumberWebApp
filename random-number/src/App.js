import RandomNumber from './screens/RandomNumber.js'
import AppProvider from './context/AppProvider.js'
function App() {
  return (
    <div>
      <AppProvider>
        <RandomNumber />
      </AppProvider>
    </div>
  );
}

export default App;
