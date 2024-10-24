import { LitElement, html, css } from "lit";

export class NasaImage extends LitElement {

  constructor() {
    super();
    this.title = "My card";
    this.description = "Default description";
    this.imageSrc = null;
    this.link = "#";
    this.fancy = false;
  }

  static get properties() {
    return {
        title: { type: String },
        description: { type: String },
        imageSrc: { type: String },
        link: { type: String },
        fancy: { type: Boolean, reflect: true }
    };
  }

  static get styles() {
    return css`
    :host {
        display: block;
        margin: 16px;
        background-color: white;
        border-radius: 8px;
        box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
        overflow: hidden;
        width: 300px;
        background-color: var(--my-card-fancy-bg, white);
      }
      :host([fancy]) {
      display: block;
        background-color: #2D3142;
        border: 2px solid white;
        box-shadow: 10px 5px 5px #4F5D75;
      }
    

      .img {
        width: 220px;
        height: auto;
        display: block;
      }

      h1 {
        font-size: 1.5em;
        margin: 16px 0 8px;
      }

      p {
        font-size: 1em;
        margin-bottom: 16px;
        color: #333;
      }

    .container{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  .card{
    background-color: powderblue;
    border-radius: 8px;
    padding: 16px;
    margin: 20px;
    border: 4px solid gray;
    width: auto;
  }

  .button{
    background-color: navy;
    color: white;
    border: 2px solid white;
    border-radius: 8px;
    font-size: 16px;
    padding: 8px;
    margin: 8px 16px;
  }
  
  my-card[curly] {
  --my-card-curly-bg:#b49ec7; ;
}

    @media screen and (min-width: 500px) and (max-width: 800px) {
      .size {
        display: block;
      }
    }

    @media screen and (max-width: 499px),
    screen and (min-width: 801px) {
      .size {
        display: none;
      }
    }
    details summary {
    text-align: left;
    font-size: 20px;
    padding: 8px 0;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
  }

  details[open] summary {
    font-weight: bold;
  
  }
  
  details div {
    border: 2px solid white;
    border-radius: 10px;
    text-align: left;
    padding: 8px;
    height: 70px;
    overflow: auto;
  }
    `;
  }

//     .image {
//     display: inline-block;
//     }

//     .image div {
//     max-width: 200px;
//     font-size: 16px;
//     font-weight: bold;
//     }

//     .image img {
//     display: block;
//     width: 200px;
//     height: 200px;
//     }

//     `];
//   }

  // put this anywhere on the MyCard class; just above render() is probably good
  openChanged(e) {
    console.log(e.newState);
    if (e.newState === "open") {
      this.fancy = true;
    }
    else {
      this.fancy = false;
    }
  }

  render() {
    return html`
    <div class="container"></div>
      <div class="card">
        <img class="img" src="${this.imageSrc}" alt="${this.title}">
        <h1>${this.title}</h1>
        <details ?open="${this.fancy}" @toggle="${this.openChanged}">
        <summary>Description</summary>
          <div>
          <slot>${this.description}</slot>
        </div>
        </details>
        <a href="${this.link}" target="_blank">
          <button class="button">Details</button>
        </a>
      </div>
  </div>
    `;
  }
  static get tag() {
    return "nasa-card";
  }
}
customElements.define(NasaImage.tag, NasaImage);