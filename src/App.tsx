import Header from "./components/Header"
import Lesson from "./components/Lesson"
import Sidebar from "./components/Sidebar"
import Video from "./components/Video"

function App() {

  return (
    <div className="flex flex-col min-h-screen">
      <Header/>
      <main className="flex flex-1" >
        <Video/>
        <Sidebar/>
      </main>
    </div>
  )
}

export default App
