$(function() {
    const myAjax = new MyAjax();
    let apiVegpont = "/api/szakdogak";
    myAjax.adatmegjelenit(apiVegpont, false, tablazatba);
    function tablazatba(tomb) {
        console.log(tomb);
        const szuloElem = $("section table tbody");
        const sablonElem = $("aside table tr");
        szuloElem.empty();
        tomb.forEach(function(elem) {    
            let sablonClone = sablonElem.clone();
            sablonClone.show();
            let node=sablonClone.appendTo(szuloElem);
            const obj = new Szakdoga(node, elem);
        });
        sablonElem.hide();
        $(sablonElem).hide();
    }

    $(window).on("szerkesztes", (event) => {
        id= event.detail.id;
            $('#szakdoga_nev').val(event.detail.szakdoga_nev);
           $('#tagokneve').val(event.detail.tagokneve);
            $('#githublink').val(event.detail.githublink);
            $('#oldallink').val(event.detail.oldallink);
    });

    $(window).on("torles", (event) => {
        myAjax.adattorol(apiVegpont,event.detail.id);
        window.location.reload();
    });

    $("#uj").on("click", () => {
        
            let szakdoga_nev= $("#szakdoga_nev").val();
            let tagokneve= $("#tagokneve").val();
           let oldallink= $("#oldallink").val();
            let githublink= $("#githublink").val();
        let szoveg={
            "szakdoga_nev": szakdoga_nev,
            "tagokneve": tagokneve,
            "githublink": githublink,
            "oldallink": oldallink
        };
        
        myAjax.adatbekuld(apiVegpont, szoveg);
    });

    $("#modosit").on("click", () => {
        
        let szakdoga_nev= $("#szakdoga_nev").val();
        let tagokneve= $("#tagokneve").val();
       let oldallink= $("#oldallink").val();
        let githublink= $("#githublink").val();
    let szoveg={
        "szakdoga_nev": szakdoga_nev,
        "tagokneve": tagokneve,
        "githublink": githublink,
        "oldallink": oldallink
    };
    
    myAjax.adatmodosit(apiVegpont, szoveg, id);
});
});