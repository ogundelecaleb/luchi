import "./App.css";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Home from "./Home";
import HomeIndex from "./scene/HomeIndex";
import Track from "./scene/Track";
import Company from "./scene/Company";
import Gallery from "./scene/Gallery";
import Menu from "./scene/Menu";
import { Provider } from "react-redux";
import { store } from "./app/store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import { SnackbarProvider } from "notistack";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      cacheTime: Infinity,
    },
  },
});
function App() {
  return (
    <div>
      <Toaster position="top-right" reverseOrder={false} />
      <SnackbarProvider
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}

      // iconVariant={{
      //   success: '✅',
      //   error: '✖️',
      //   warning: '⚠️',
      //   info: 'ℹ️',
      // }}
      // autoHideDuration={7000}
      />
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>

          <Router>
            <Routes>
              <Route element={<Home />}>
                <Route path="/" element={<HomeIndex />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/track" element={<Track />} />
                <Route path="/company" element={<Company />} />
                <Route path="/gallery" element={<Gallery />} />
              </Route>
            </Routes>
          </Router>
        </Provider>
      </QueryClientProvider>
    </div>
  );
}

export default App;
