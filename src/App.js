import Main from "./components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query"
import { ReactQueryDevtools } from 'react-query/devtools';

const queryClient = new QueryClient();

function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Switch>
          <Route path="/" component={Main} />
          <ReactQueryDevtools initialIsOpen />
        </Switch>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
