class Szakdoga {
    constructor(node, adat) {

        this.node = node;
        this.adat = adat;

        this.cime = this.node.children(".cime");
        this.cime.text(adat.szakdoga_nev);

        this.neve = this.node.children(".neve");
        this.neve.text(adat.tagokneve);

        this.gitlink = this.node.children(".gitlink");
        this.gitlink.text(adat.githublink);

        this.elerhetoseg = this.node.children(".elerhetoseg");
        this.elerhetoseg.text(adat.oldallink);

        this.szerkeszt = this.node.children().children(".szerkesztGomb");
        this.szerkeszt.on("click", () => {
            this.kattintasTrigger("szerkesztes");
        });
        this.torol = this.node.children().children(".torolGomb");
        this.torol.on("click", () => {
            this.kattintasTrigger("torles");
        });
    }
    kattintasTrigger(esemenyneve) {
        let esemeny = new CustomEvent(esemenyneve, {
            detail: this.adat,
        });
        window.dispatchEvent(esemeny);
    }
}