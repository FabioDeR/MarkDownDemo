import React, { Component } from "react";
import "./App.css";
import { sampleText } from "./sampleText";
import marked from "marked";

class App extends Component {
  state = {
    text: sampleText,
  };

  componentDidMount() {
    const text = localStorage.getItem("text");
    if (text) {
      this.setState({ text });
    } else {
      this.setState({ text: sampleText });
    }
  }

  componentDidUpdate() {
    const { text } = this.state;
    localStorage.setItem("text", text);
  }

  handelChange = (event) => {
    const text = event.target.value;
    this.setState({ text });
  };

  renderText = (text) => marked(text, { sanitize: true });

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <textarea
              onChange={this.handelChange}
              value={this.state.text}
              className="form-control"
              rows="45"
            ></textarea>
          </div>
          <div className="col-sm-6">
            <div
              dangerouslySetInnerHTML={{
                __html: this.renderText(this.state.text),
              }}
            ></div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
