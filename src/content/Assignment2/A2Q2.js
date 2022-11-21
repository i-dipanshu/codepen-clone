const question_no = "A1Q2";

const question = `Create a page to <div> elements. You may add nested <div> elements and add CSS to make
it look like a table.`;

const html = `<h2>Hello there!</h2>
<img src='https://images.squarespace-cdn.com/content/v1/57713a8e2994cae381dd86fe/1510405002757-FP2W9HV8ZA0HP2IF3O6A/SOA-PNG.png' />
`;

const css = `@import "../../styles/variables.scss";

.section {
  height: 30vh;
  width: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin: 1rem;
  padding: 1rem;
  border: none;
  border-radius: 0.5rem;
  box-shadow: 0 0 10px 0 $shadow-color;

  &:hover {
    color: $hover-color;
    transition: all 0.5s;
  }

  h2 {
    text-transform: capitalize;
    color: $white-color;
    &:hover {
      color: $hover-color;
      transition: all 0.3s;
    }
  }
}

.assignments {
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

.text-start {
  text-align: start;
}

.heading {
  margin: 2rem;
  font: 800 3.5rem $cursive-font;
  color: $hover-color;
}

.question {
  margin-left: 2rem;
  margin-top: 2rem;
  margin-bottom: 2rem;
  font: 600 2rem $sec-font;
  text-align: start;
}

.title {
  color: $hover-color;
  font: 800 2rem $cursive-font;
}

.solution {
  margin: 0 3rem;
}

.editor {
  margin: 2rem;
}

.top-pane {
  display: flex;
  flex-direction: column;
}

.pane {
  display: flex;
}

.iframe {
  height: 70vh;
}

.editor-container {
  flex-grow: 1;
  flex-basis: 0;
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
  border-radius: 0.2rem;
  font: 800 1rem $cursive-font;
}

.editor-container.collapsed {
  flex-grow: 0;
}

.editor-container.collapsed .CodeMirror-scroll {
  position: absolute;
  overflow: hidden !important;
}

.expand-collapse-btn {
  margin-left: 0.5rem;
  background: none;
  border: none;
  color: white;
  cursor: pointer;
}

.editor-title {
  display: flex;
  justify-content: space-between;
  background-color: $sec-dark-color;
  color: $white-color;
  padding: 0.5rem 0.5rem 0.5rem 1rem;
  border-radius: 0.5rem;
  font: 800 1rem $code-font;
}

.CodeMirror {
  height: 100% !important;
}

.code-mirror-wrapper {
  flex-grow: 1;
  border-bottom-right-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
  overflow: hidden;
}

.box {
  border: 2px solid $hover-color;
  border-radius: 0.3rem;
  box-shadow: 0 0 10px 0 $shadow-color;
  margin: 2rem;
  background-color: $black-color;
}

`;

const js = `function(){
  console.log("Hello there!);
}

`;

const Data = {
  question_no,
  question,
  html,
  css,
  js,
};

export default Data;
