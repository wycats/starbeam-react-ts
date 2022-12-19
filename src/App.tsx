import "./App.css";
import "./prism.css";
import "prism-themes/themes/prism-vs.css";
import "prismjs/plugins/line-highlight/prism-line-highlight.css";

import Docs from "./index.mdx";

function App() {
  return (
    <>
      <section>
        <Docs />
      </section>
    </>
  );
}

export default App;
