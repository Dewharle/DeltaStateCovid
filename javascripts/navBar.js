class Header extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <!-- nav bar section -->
    <div class="text-center my-3">
        <img
          src="../images/naija_logo.png"
          width="50"
          height="50"
          class=""
          alt=""
          loading="lazy"
        />
        <img
          src="../images/delta_logo.png"
          width="50"
          height="50"
          class=""
          alt=""
          loading="lazy"
        />
    </div>
      `;
  }
}

class Footer extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <footer class="mt-5 mb-2 py-2 text-secondary">
    <h5 class="text-primary">
      DELTA STATE-HOTLINES: 08031230480, 08031230481, 08031230528, 08031230529
    </h5>
    <h6>
      Twitter/Facebook: @deltasmoh/Deltasmoh Asaba
    </h6>
  </footer>
        `;
  }
}

customElements.define("main-logo", Header); 
customElements.define("main-footer", Footer);
