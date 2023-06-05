import { valueProps } from "./App";
import Toolbar from "./components/toolbar/Toolbar";

function Contact(props: valueProps) {
  return (
    <>
      <div className="header">
        <div className="title">
          <h1>Pierre Nicolas</h1>
          <h1>Pierre Nicolas</h1>
        </div>
        <h2>Portfolio</h2>
      </div>
      <div className="body">
        <div className="left">
          <h3>Par email</h3>
          <ul style={{ listStyleType: "none", fontSize: "2.2rem" }}>
            <li>
              <a href="mailto:Pierre.mjenr@gmail.com">Pierre.mjenr@gmail.com</a>
            </li>
            <li>
              <a href="mailto:support@softify.fr">support@softify.fr</a>
            </li>
          </ul>
        </div>
        <div className="right">
          <h3>Par téléphone</h3>
          <ul style={{ listStyleType: "none", fontSize: "2.2rem" }}>
            <li>..6 52 10 97 40</li>
          </ul>
        </div>
        <div className="middle" style={{ fontSize: "2.2rem" }}>
          Adresse : 4 rue de la république, 69001, Lyon 1er
        </div>
        <div className="middle" style={{ fontSize: "2.2rem" }}>
          Société: Azure Diff
        </div>
      </div>
      <div className="footer">
        <Toolbar value={props.value} setValue={props.setValue} />
      </div>
    </>
  );
}

export default Contact;
