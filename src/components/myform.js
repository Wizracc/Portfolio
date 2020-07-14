import React from "react";
import "../styles/myform.css";

export default class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: "",
    };
  }

  render() {
    const { status } = this.state;
    return (
      <form
        className="form"
        onSubmit={this.submitForm}
        action="https://formspree.io/mbjzpyey"
        method="POST"
      >
        <h2>Contact me:</h2>
        <label>Email:</label>
        <input type="email" name="email" />
        <label>Message:</label>
        <textarea className="message" type="text" name="message" />
        {status === "SUCCESS" ? (
          <p>Thanks!</p>
        ) : (
          <button className="submit">Submit</button>
        )}
        {status === "ERROR" && <p>Ooops! There was an error.</p>}
        <p>Or, contact me directly with the info on the About page</p>
      </form>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}
