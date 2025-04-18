import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import LoadingScreen from "@/components/LoadingScreen";
import NotFound from "@/pages/not-found";
import Login from "@/pages/login";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Login} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <LoadingScreen />
      <Router />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
