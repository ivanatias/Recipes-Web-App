import Main from "./components";
import RecipeDetails from "./components/pages/RecipeDetails/RecipeDetails";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider, QueryCache } from "react-query"
import { ReactQueryDevtools } from 'react-query/devtools';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const queryClient = new QueryClient({

  queryCache: new QueryCache({

    onError: (error, query) => {

      // only show error toasts if we already have data in the cache

      // which indicates a failed background update

      if (query.state.data !== undefined) {

        toast.error(`Something went wrong: ${error.message}`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        })

      }

    },

  }),

})

function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/recipes/:recipeId" exact component={RecipeDetails} />
        </Switch>
      </Router>
      <ReactQueryDevtools initialIsOpen={false} />
      <ToastContainer />
    </QueryClientProvider>
  );
}

export default App;
