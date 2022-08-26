import { ApolloProvider } from "@apollo/client"
import { BrowserRouter } from "react-router-dom"
import { client } from "./lib/apollo"
import Router from "./routes/Router"

function App() {

  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Router/>
      </BrowserRouter>
    </ApolloProvider>
  )
}

export default App

{/* <div className="flex flex-col min-h-screen">
      <Header/>
      <main className="flex flex-1" >
        <Video/>
        <Sidebar/>
      </main>
    </div> */}