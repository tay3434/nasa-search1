import { html, fixture, expect } from '@open-wc/testing';
import "../nasa-search1.js";

describe("nasaSearch1 test", () => {
  let element;
  beforeEach(async () => {
    element = await fixture(html`
      <nasa-search1
        title="title"
      ></nasa-search1>
    `);
  });

  it("basic will it blend", async () => {
    expect(element).to.exist;
  });

  it("passes the a11y audit", async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});
