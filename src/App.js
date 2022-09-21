import { DefaultLayout } from '~/layouts';
import Home from '~/pages/Home';
import SearchPane from './pages/SearchPane';

function App() {
    return (
        <div className="App">
            <DefaultLayout>
                <Home />
                {/* <SearchPane /> */}
            </DefaultLayout>
        </div>
    );
}

export default App;
