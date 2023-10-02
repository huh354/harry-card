import { LitElement, html, css } from 'lit';

export class HarryCard extends LitElement {
  static properties = {
    version: {},
  };

  static get styles() {
    return css`
    .color {
  background-color: red;
}
body {
  background-color: lightgreen;
  
}
.card { 
  border-style: solid;
  border-width: 3px;
  border-color: green;
  border-radius: 10px;
  background-color:lightgreen;
  width: 450px;
}
img {
  margin: 25px;
  width: 400px;
  height: auto;
}
.btn-wrapper {
  margin: 24px;
}
.btn-wrapper button {
  font-size: 24px;
  color: green;
  background-color: white;
}
.btn-wrapper button:hover {
  color: white;
  background-color: green;
}
.header {
  font-size: 20px;
  margin: 25px;
}
.paragraph {
  font-size: 20px;
  margin: 25px;
}
@media screen and (max-width: 800px) {  
  div.Frog {
    display: none;
  }
  div.header{
    display: none;
  }
  div.paragraph{
    display: none;
  }

}
div, span {
  display: inline-block;
}


    `
  }

  constructor() {
    super();
    this.version = 'meow';
  }

  render() {
    return html`
    <div class = "wrapper">
<div class = "card">
<div class = "header">

  <h1>Welcome to my card</h1>
  </div>

  <img src="https://cdn.creatureandcoagency.com/uploads/2021/03/FrogLifecycle_Body_8.png">
 
  <div class = "paragraph">
  <p>This is a picture of a frog that I fond on the internet. It looks really cool and I thought it would be nice to share.</p>
  </div>



    `;
  }
}

customElements.define('harry-card', HarryCard);