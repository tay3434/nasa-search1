import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";

export class NasaCard extends DDDSuper(LitElement) {

  constructor() {
    super();
    this.title = '';
    this.source = '';
    this.alt = '';
    this.secondary_creator = 'Nasa';
  }

  static get properties() {
    return {
        source: { type: String },
        title: { type: String },
        alt: { type: String},
        secondary_creator: { type: String}
    };
  }

  static get styles() {
    return [css`
    .card{
      background-color: var(--ddd-theme-default-skyLight);
      border-radius: 8px;
      padding: 16px;
      margin: 20px;
      border: var(--ddd-border-md);
      width: 240px;
      height: 340px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      cursor: pointer;
    }
    .card:hover{
      background-color: var(--ddd-theme-default-accent);
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
    .creator{
      font-size: 16px;
      font-style: italic;
      color: var(--ddd-theme-default-coalyGray);
    }

    `];
  }
  
  newWindow(){
    window.open(this.source, '_blank');
  }

  render() {
    return html`
      <div class="card" @click="${this.newWindow}" tabindex="0" @keydown="${this.tabWindow}">
          <img src="${this.source}" alt="${this.alt}" />
          <div class="details">${this.title}</div>
          <div class="creator">Owner of media: ${this.secondary_creator}</div>
      </div>
    `;
  }

  tabWindow(e){
    if (e.key === 'Enter'){
      this.newWindow();
    }
  }


  static get tag() {
    return "nasa-card";
  }
  static get haxProperties() {
    return new URL(`./lib/${this.tag}.haxProperties.json`, import.meta.url)
      .href;
  }
}
customElements.define(NasaCard.tag, NasaCard);