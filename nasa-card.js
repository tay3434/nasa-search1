import { LitElement, html, css } from "lit";

export class NasaCard extends LitElement {

  constructor() {
    super();
    this.title = '';
    this.source = '';
    this.alt = '';
  }

  static get properties() {
    return {
        source: { type: String },
        title: { type: String },
        alt: { type: String}
    };
  }

  static get styles() {
    return [css`
    .card{
      background-color: powderblue;
      border-radius: 8px;
      padding: 16px;
      margin: 20px;
      border: 4px solid gray;
      width: 220px;
      height: 380px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      cursor: pointer;
    }
    .card:hover{
      background-color: lavender;
    }
    img {
      width: 240px;
      height: 200px;
      display: block;
      border-radius: 4px;
    }

    .details{
      text-align: center;
      font-size: 20px;
      font-family: 'Times New Roman', Times, serif;
    }

    `];
  }
  
  newWindow(){
    window.open(this.source, '_blank');
  }

  render() {
    return html`
      <div class="card" @click="${this.newWindow}">
          <img src="${this.source}" alt="${this.alt}" />
          <div class="details">${this.title}</div>
      </div>
    `;
  }

  tabWindow(e){
    window.open(this.source, '_blank');
  }


  static get tag() {
    return "nasa-card";
  }
}
customElements.define(NasaCard.tag, NasaCard);