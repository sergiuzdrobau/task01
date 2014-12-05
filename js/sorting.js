function id_asc() {
    allData = localStorage.getItem('allData');
    allData = JSON.parse(allData);
    var tmpl = document.getElementById("helloTmpl").innerHTML;
    var html = Mustache.to_html(tmpl, allData);
    var box = document.getElementById("users");
    box.innerHTML = html;
}

function id_desc() {

    allData = localStorage.getItem('allData');
    allData = JSON.parse(allData);
    var desc = new Object();
    desc.getData = allData.getData.reverse();
    var tmpl = document.getElementById("helloTmpl").innerHTML;
    var html = Mustache.to_html(tmpl, desc);
    var box = document.getElementById("users");
    box.innerHTML = html;
}


function title_asc() {
    allData = localStorage.getItem('allData');
    allData = JSON.parse(allData);
    var aux = new Object();

    for (var i = 0; i < allData.getData.length - 1; i++) {
        for (var j = i + 1; j < allData.getData.length; j++) {

            if (allData.getData[i].title > allData.getData[j].title) {
                aux = allData.getData[i];
                allData.getData[i] = allData.getData[j];
                allData.getData[j] = aux;
            }
        }
    }
    var tmpl = document.getElementById("helloTmpl").innerHTML;
    var html = Mustache.to_html(tmpl, allData);
    var box = document.getElementById("users");
    box.innerHTML = html;

}

function title_desc() {
    allData = localStorage.getItem('allData');
    allData = JSON.parse(allData);
    var aux = new Object();

    for (var i = 0; i < allData.getData.length - 1; i++) {
        for (var j = i + 1; j < allData.getData.length; j++) {

            if (allData.getData[i].title < allData.getData[j].title) {
                aux = allData.getData[i];
                allData.getData[i] = allData.getData[j];
                allData.getData[j] = aux;
            }
        }
    }
    var tmpl = document.getElementById("helloTmpl").innerHTML;
    var html = Mustache.to_html(tmpl, allData);
    var box = document.getElementById("users");
    box.innerHTML = html;
}

function brand_asc() {
    allData = localStorage.getItem('allData');
    allData = JSON.parse(allData);
    var aux = new Object();

    for (var i = 0; i < allData.getData.length - 1; i++) {
        for (var j = i + 1; j < allData.getData.length; j++) {

            if (allData.getData[i].brand > allData.getData[j].brand) {
                aux = allData.getData[i];
                allData.getData[i] = allData.getData[j];
                allData.getData[j] = aux;
            }
        }
    }
    var tmpl = document.getElementById("helloTmpl").innerHTML;
    var html = Mustache.to_html(tmpl, allData);
    var box = document.getElementById("users");
    box.innerHTML = html;

}

function brand_desc() {
    allData = localStorage.getItem('allData');
    allData = JSON.parse(allData);
    var aux = new Object();

    for (var i = 0; i < allData.getData.length - 1; i++) {
        for (var j = i + 1; j < allData.getData.length; j++) {

            if (allData.getData[i].brand < allData.getData[j].brand) {
                aux = allData.getData[i];
                allData.getData[i] = allData.getData[j];
                allData.getData[j] = aux;
            }
        }
    }
    var tmpl = document.getElementById("helloTmpl").innerHTML;
    var html = Mustache.to_html(tmpl, allData);
    var box = document.getElementById("users");
    box.innerHTML = html;
}


function time_asc() {
    allData = localStorage.getItem('allData');
    allData = JSON.parse(allData);
    var aux = new Object();
    for (var i = 0; i < allData.getData.length - 1; i++) {
        for (var j = i + 1; j < allData.getData.length; j++) {

            if (allData.getData[i].timeframe + allData.getData[i].timeframeyear > allData.getData[j].timeframe + allData.getData[j].timeframeyear) {
                aux = allData.getData[i];
                allData.getData[i] = allData.getData[j];
                allData.getData[j] = aux;
            }
        }
    }
    var tmpl = document.getElementById("helloTmpl").innerHTML;
    var html = Mustache.to_html(tmpl, allData);
    var box = document.getElementById("users");
    box.innerHTML = html;

}



function time_desc() {
    allData = localStorage.getItem('allData');
    allData = JSON.parse(allData);
    var aux = new Object();
    for (var i = 0; i < allData.getData.length - 1; i++) {
        for (var j = i + 1; j < allData.getData.length; j++) {

            if (allData.getData[i].timeframe + allData.getData[i].timeframeyear < allData.getData[j].timeframe + allData.getData[j].timeframeyear) {
                aux = allData.getData[i];
                allData.getData[i] = allData.getData[j];
                allData.getData[j] = aux;
            }

        }
    }
    var tmpl = document.getElementById("helloTmpl").innerHTML;
    var html = Mustache.to_html(tmpl, allData);
    var box = document.getElementById("users");
    box.innerHTML = html;
}


function sales_asc() {
    allData = localStorage.getItem('allData');
    allData = JSON.parse(allData);
    var aux = new Object();

    for (var i = 0; i < allData.getData.length - 1; i++) {
        for (var j = i + 1; j < allData.getData.length; j++) {

            if (allData.getData[i].sales > allData.getData[j].sales) {
                aux = allData.getData[i];
                allData.getData[i] = allData.getData[j];
                allData.getData[j] = aux;
            }
        }
    }
    var tmpl = document.getElementById("helloTmpl").innerHTML;
    var html = Mustache.to_html(tmpl, allData);
    var box = document.getElementById("users");
    box.innerHTML = html;

}

function sales_desc() {
    allData = localStorage.getItem('allData');
    allData = JSON.parse(allData);
    var aux = new Object();

    for (var i = 0; i < allData.getData.length - 1; i++) {
        for (var j = i + 1; j < allData.getData.length; j++) {

            if (allData.getData[i].sales < allData.getData[j].sales) {
                aux = allData.getData[i];
                allData.getData[i] = allData.getData[j];
                allData.getData[j] = aux;
            }
        }
    }
    var tmpl = document.getElementById("helloTmpl").innerHTML;
    var html = Mustache.to_html(tmpl, allData);
    var box = document.getElementById("users");
    box.innerHTML = html;
}