$(function() {
    const myAjax = new MyAjax();
    let apiVegpont = "/api/szakdogak";
    myAjax.adatmegjelenit(apiVegpont, false, tablazatba);

    function tablazatba(tomb) {
        console.log(tomb);
        const szuloElem = $(".tablazat table");

        const sablonElem = $(".footer .szakdoga ");
        sablonElem.show();
        szuloElem.empty();
        szuloElem.append("<tr><th>Szakdolgozat címe</th><th>Készítők neve</th><th>Github link</th><th>Szakdolgozat elérhetőség</th><th></th><th></th></tr > ");
        tomb.forEach(function(elem) {
            console.log(elem);
            let node = sablonElem.clone().appendTo(szuloElem);
            new Szakdoga(node, elem);
        });
        sablonElem.hide();
        $(sablonElem).hide();
    }

    $(window).on("szerkesztes", (event) => {
        apiVegpont = "/api/szakdogak";
        let adat = {
            cime: $('.szakdolgozatCime').val(),
            neve: $('.keszitokNeve').val(),
            oldalElerhetosege: $('.oldalElerhetosege').val(),
            gitHubElerhetosege: $('.gitHubElerhetosege').val(),
        }
        console.log(adat);
        myAjax.adatmodosit(apiVegpont, adat, event.detail.id);
        window.location.reload();
    });
    $(window).on("torles", (event) => {
        let id = event.detail.id;
        apiVegpont = "/api/szakdogak";
        myAjax.adattorol(apiVegpont, id);


    });

    $(".felvisz").on("click", () => {
        $(".githubElerhetoseg").val();
        apiVegpont = "/api/szakdogak";
        szoveg = {
            szakdolgozatCime: $(".szakdolgozatCime").val(),
            keszitokNeve: $(".keszitokNeve").val(),
            oldalElerhetosege: $(".oldalElerhetosege").val(),
            gitHubElerhetosege: $(".gitHubElerhetosege").val()
        }
        console.log(szoveg);
        myAjax.adatbekuld(apiVegpont, szoveg);
    });
});