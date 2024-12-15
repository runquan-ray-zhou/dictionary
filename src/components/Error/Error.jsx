import "./Error.css";

export default function Error({ errorWord }) {
  return (
    <div className="error">
      <h1>404</h1>
      <p>You found the error page</p>
      <p>This dictionary does not contain "{errorWord}".</p>
    </div>
  );
}
