class CustomTextInput extends HTMLElement {
    constructor() {
      super();
      this.InputTextContent({
        Text_Input: "This is Input Tag",
        Text_Button: "this is Button Tag",
      });
    }
  
    InputTextContent({ Text_Input, Text_Button }) {
      this.text_input = Text_Input;
      this.text_button = Text_Button;
    }
  
    connectedCallback() {
      let input = document.createElement("input");
      input.value = this.text_input;
  
      let button = document.createElement("button");
      button.textContent = this.text_button;
      button.setAttribute("type", "button");
  
      this.appendChild(input);
      this.appendChild(button);
    }
  }
  
  customElements.define("custom-ti", CustomTextInput);