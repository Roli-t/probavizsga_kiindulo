class MyAjax {
    constructor() {

    }
    

    adatmegjelenit(faljnev, tomb, myCallback) {
        tomb = [];
        $.ajax({
            url: faljnev,
            type: "GET",
            success: function(result) {
                result.forEach((value) => {
                    tomb.push(value);
                });
                myCallback(tomb);
            },
        });
    }

    adatbekuld(faljnev, adat) {
        $.ajax({
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
              },
            url: faljnev,
            type: "POST",
            data: adat,
        });
    }

    adattorol(faljnev, id) {
        $.ajax({
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
              },
            url: faljnev + "/" + id,
            type: "DELETE"
        });
    }

    adatmodosit(faljnev, adat, id) {
        $.ajax({
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
              },
            url: faljnev + "/" + id,
            type: "PUT",
            data: adat,
           
        });
    }
}