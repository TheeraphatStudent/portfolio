import { Navbar } from "./components/navbar"

function App() {

  return (
    <main
      className="bg-black w-screen h-screen flex justify-center"
    >
      {/* Content Here! */}
      <div
        className="h-full bg-night-primary lg:w-[60vw] w-full max-w-[1440px]"
      >
        <Navbar></Navbar>
        {/* <h1 className="text-secondary animate-pulse">Hello World</h1> */}

      </div>
    </main>
  )
}

export default App
