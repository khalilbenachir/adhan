import { QueryClient, QueryClientProvider } from "react-query";

import Adhan from "./components/adhan";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Adhan />
    </QueryClientProvider>
  );
}

export default App;
