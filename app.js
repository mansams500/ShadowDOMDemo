class DisplayComponent extends HTMLElement{
    constructor(){
        super();
        var shadow = this.attachShadow({mode : 'open'})
        //var shadow = this.attachShadow({mode : 'closed'})
        shadow.innerHTML = '<h1>Manasa</h1>'
      
    }
}

window.customElements.define('display-comp',DisplayComponent);