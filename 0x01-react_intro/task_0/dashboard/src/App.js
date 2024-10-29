import logo from "./logo.jpg";
function App() {
  return (
    <div>
      <div className="flex flex-col min-h-screen">
        <header className="flex border-b-8 border-red-500">
          <img className="w-1/2" src={logo} alt="holberton logo" />
          <h1 className="justify-center content-center flex-1 text-2xl text-red-500 ">School dashboard</h1>
        </header>
      </div>

      <div>
        <body className="flex-grow flex items-start justify-center">
          <p>Login to access the full dashboard</p>
        </body>
      </div>

      <div>
        <footer className="w-full border-t-8 border-red-500">
          <p>Copyright 2020 - holberton School</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
