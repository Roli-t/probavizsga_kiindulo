class Szakdoga {
    constructor(node, adat) {

        this.node = node;
        this.adat = adat;

        this.cime = this.node.children(".szakdogacime");
        this.neve = this.node.children(".tagok");
        this.gitlink = this.node.children(".githublink");
        this.elerhetoseg = this.node.children(".oldallink");
        this.szerkeszt = this.node.children("td").children(".szerkesztGomb");
        this.torol = this.node.children("td").children(".torolGomb");

        
        this.szerkeszt.on("click", () => {
            this.kattintasTrigger("szerkesztes");
        });
        
        this.torol.on("click", () => {
            this.kattintasTrigger("torles");
        });
        this.setAdat(this.adat);
    }

    setAdat(adat){
        this.adat=adat;
        this.cime.text(adat.szakdoga_nev);
        this.neve.text(adat.tagokneve);
        this.gitlink.text(adat.githublink);
        this.elerhetoseg.text(adat.oldallink);

    }

    kattintasTrigger(esemenyneve) {
        let esemeny = new CustomEvent(esemenyneve, {
            detail: this.adat,
        });
        window.dispatchEvent(esemeny);
    }
}