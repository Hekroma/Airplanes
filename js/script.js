var array = [{
        id: 1,
        empty_legs: "Los Angeles - Teterboro",
        data: "28 февраля 2018 года",
        plane: "LearJet 45 XR"
    },
    {
        id: 2,
        empty_legs: "Boca Raton - West Chicago",
        data: "28 февраля 2018 года",
        plane: "LearJet 40"
    },
    {
        id: 3,
        empty_legs: "Los Angeles - Teterboro",
        data: "28 февраля 2018 года",
        plane: "LearJet 60 XR"
    },
    {
        id: 4,
        empty_legs: "Boca Raton - West Chicago",
        data: "1 марта 2018 года",
        plane: "Global 5000"
    },
    {
        id: 5,
        empty_legs: "Los Angeles - Teterboro",
        data: "2 марта 2018 года",
        plane: "Challenger 300"
    },
    {
        id: 6,
        empty_legs: "Boca Raton - West Chicago",
        data: "2 марта 2018 года",
        plane: "Challenger 850"
    },
    {
        id: 7,
        empty_legs: "Los Angeles - Teterboro",
        data: "4 марта 2018 года",
        plane: "P.180 Avanti II"
    },
    {
        id: 8,
        empty_legs: "Boca Raton - West Chicago",
        data: "4 марта 2018 года",
        plane: "LearJet 45 XR"
    },
    {
        id: 9,
        empty_legs: "Los Angeles - Teterboro",
        data: "5 марта 2018 года",
        plane: "LearJet 40"
    },
    {
        id: 10,
        empty_legs: "Boca Raton - West Chicago",
        data: "7 марта 2018 года",
        plane: "LearJet 60 XR"
    },
    {
        id: 11,
        empty_legs: "Los Angeles - Teterboro",
        data: "7 марта 2018 года",
        plane: "Global 5000"
    },
    {
        id: 12,
        empty_legs: "Boca Raton - West Chicago",
        data: "7 марта 2018 года",
        plane: "Challenger 300"
    },
    {
        id: 13,
        empty_legs: "Los Angeles - Teterboro",
        data: "9 марта 2018 года",
        plane: "Challenger 850"
    },
    {
        id: 14,
        empty_legs: "Boca Raton - West Chicago",
        data: "10 марта 2018 года",
        plane: "P.180 Avanti II"
    },
];

var table = '';

array.forEach(function (item) {
    table += '<tr>\
                <td>' + item.empty_legs + '</td>\
                <td>' + item.data + '</td>\
                <td>' + item.plane + '</td>\
                <td class="order" onclick="rowClick(' + item.id + ')">' + "заказать рейс" + '</td>\
            </tr>';
});

$('.tbody').html(table);

window.rowClick = function (id) {
    var item = array.find(function (item) {
        return item.id === id;
    });
    $('.modal').html('<p>' + 'Рeйс направлением ' + '<br>' + "'" + item.empty_legs + "'" + '<br>' + ' отправляется ' + '<br>' + item.data + '</p>' +
        '<button id="close">' + 'Close' + '</button>'
    );
    $('#modal').show();
    $('#close').click(function () {
        $('#modal').hide();
    });
};