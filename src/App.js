import "./App.css";

function App() {
  return (
    <>
      <text
        style={{
          fontSize: 48,
          fontWeight: "bold",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        SNAPZO
      </text>
      <text
        style={{
          fontSize: 28,
          fontWeight: "bold",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        ITS A PHOTOGRAPHER APP
      </text>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "10px",
        }}
      >
        <img
          src="https://clipground.com/images/camera-lens-logo-design-clipart-2.png"
          height={500}
          width={1000}
        ></img>

        {/* <header className="App-header">
        <a className="App-link" rel="noopener noreferrer">
          SNAPZO
        </a>
        <a>
          <p>Ann photographer app!</p>
        </a>

        <img src={logo} className="App-logo" alt="logo" />
        {data.map(({ name, price, image }) => (
          <>
            <img className={name} src={image} alt="logo"></img>
            <p>{name}</p>
            <p>{price}</p>
          </>
        ))}
      </header> */}
      </div>
    </>
  );
}

export default App;
