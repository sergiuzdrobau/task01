var nr_of_reg = 0;
var nr_max = 0;
nr_max = localStorage.getItem('nr_max');
var allData = new Object;
if (typeof nr_max === 'undefined' || nr_max == null || nr_max == 0) {
    nr_max = 0;
    id = nr_max;
}


function mustacheDo() {
    allData = localStorage.getItem('allData');
    allData = JSON.parse(allData);
    var tmpl = document.getElementById("helloTmpl").innerHTML;
    var html = Mustache.to_html(tmpl, allData);
    var box = document.getElementById("users");
    box.innerHTML = html;
}


function showSumms(a, b, c) {
    var added_div = document.createElement("div");
    added_div.style.fontSize = "14px";
    added_div.id = "added_div";
    added_div.innerHTML = '<p>#Of Market Launches: ' + a + '</p> <p>Regional Total Amount of Estimated Sales Potential: ' + b + '</p> <p>Global Total Amount of Estimated Sales Potential: ' + parseFloat(c).toFixed(2) + '</p>';
    document.body.appendChild(added_div);
}

function edit_row(id) {
    var dialog3, form,
        title = $("#title3"),
        brand = $("#brand3"),
        win = $("#win3");
    timeframe = $("#timeframe3");
    timeframeyear = $("#timeframeyear3");
    sales = $("#sales3"),
        allFields = $([]).add(title).add(brand).add(sales),
        tips = $(".validateTips");

    function updateTips(t) {
        tips
            .text(t)
            .addClass("ui-state-highlight");
        setTimeout(function() {
            tips.removeClass("ui-state-highlight", 1500);
        }, 500);
    }

    function checkLength(o, n, min, max) {
        if (o.val().length > max || o.val().length < min) {
            o.addClass("ui-state-error");
            updateTips("Length of " + n + " must be between " +
                min + " and " + max + ".");
            return false;
        } else {
            return true;
        }
    }

    function checkRegexp(o, regexp, n) {
        if (!(regexp.test(o.val()))) {
            o.addClass("ui-state-error");
            updateTips(n);
            return false;
        } else {
            return true;
        }
    }

    dialog3 = $("#dialog-form3").dialog({
        autoOpen: false,
        height: 600,
        width: 500,
        modal: true,
        buttons: {
            "Edit account": function() {
                var valid = true;
                allFields.removeClass("ui-state-error");
                valid = valid && checkLength(title, "title", 3, 16);
                valid = valid && checkRegexp(title, /^[a-z]([0-9a-z_\s])+$/i, "Title may consist of a-z, 0-9, underscores, spaces and must begin with a letter.");
                valid = valid && checkRegexp(sales, /^[0-9]+$/i, "Sales may consist of 0-9.Minim 1 character.");
                if (valid) {
                    $('#users').remove();
                    $("#users-contain").append('<table id="users" class="ui-widget ui-widget-content"><thead><tr class="ui-widget-header "><th>ID</th><th>Title</th><th>Brand</th><th>Launch TimeFrame</th><th>Est. Sales Potential(USD)</th><th>Est. Sales Potential(CHF)</th><th>Status</th><th>Actions</th></tr></thead><tbody></tbody></table>');
                    var sales2 = parseInt(sales.val()) / 1.1;
                    var suma1 = suma1 + parseInt(sales.val());
                    var suma2 = suma1 / 1.1;

                    users = localStorage.getItem('users');
                    users = JSON.parse(users);
                    users['id' + id] = id;
                    users['title' + id] = title.val();
                    users['brand' + id] = brand.val();
                    users['timeframe' + id] = timeframe.val();
                    users['win' + id] = win.val();
                    users['timeframeyear' + id] = timeframeyear.val();
                    users['sales' + id] = parseInt(sales.val());
                    localStorage.setItem('users', JSON.stringify(users));

                    var suma_sel1 = 0;
                    var data_to_array = [];
                    for (i = 1; i <= nr_max; i++) {
                        var element_to_delete = document.getElementById("added_div");
                        if (element_to_delete) {
                            element_to_delete.parentNode.removeChild(element_to_delete);
                        }

                        users = localStorage.getItem('users');
                        users = JSON.parse(users);
                        title_sel = users['title' + i];
                        if (typeof title_sel == 'string') {


                            data_to_array.push({
                                "id": users['id' + i],
                                "title": users['title' + i],
                                "brand": users['brand' + i],
                                "sales": users['sales' + i],
                                "sales2": (parseInt(users['sales' + i]) / 1.1).toFixed(2),
                                "timeframe": users['timeframe' + i],
                                "timeframeyear": users['timeframeyear' + i]
                            });
                            allData = {
                                "getData": data_to_array
                            };
                            localStorage.setItem('allData', JSON.stringify(allData));
                            mustacheDo();
                            sales_sel = users['sales' + i];
                            sales2_sel = sales_sel / 1.1;
                            suma_sel1 = parseInt(suma_sel1 + sales_sel);
                            suma_sel2 = parseInt(suma_sel1 / 1.1);
                            showSumms(nr_of_reg, suma_sel1, suma_sel2);
                        } else {
                            showSumms(nr_of_reg, suma_sel1, suma_sel2);
                        }
                    }
                    dialog3.dialog("close");
                }
                return valid;
            },
            Cancel: function() {
                dialog3.dialog("close");
            }
        }
    }); //dialog3 close
    var suma_sel1, suma_sel2;
    users = localStorage.getItem('users');
    users = JSON.parse(users);
    title_sel = users['title' + id];
    brand_sel = users['brand' + id];
    timeframe_sel = users['timeframe' + id];
    win_sel = users['win' + id];
    timeframeyear_sel = users['timeframeyear' + id];
    sales_sel = users['sales' + id];
    $('#title3').val(title_sel);
    $('#brand3').val(brand_sel);
    $('#sales3').val(sales_sel);
    $('#timeframe3').val(timeframe_sel);
    $('#timeframeyear3').val(timeframeyear_sel);
    $('#win3').val(win_sel);
    dialog3.dialog("open");
}

function delete_row(id) {

    $("#delete" + id).on("click", function() {
        function delete_row1(id) {
            var title_sel = "";
            var brand_sel = "";
            var timeframe_sel = "";
            var timeframe_sel = "";
            var timeframeyear_sel = "";
            var sales_sel = 0;
            var sales2_sel = 0;
            var suma_sel1 = 0;
            var suma_sel2 = 0;
            nr_of_reg = 0;
            users = localStorage.getItem('users');
            users = JSON.parse(users);
            delete users['id' + id];
            delete users['title' + id];
            delete users['brand' + id];
            delete users['timeframe' + id];
            delete users['win' + id];
            delete users['timeframeyear' + id];
            delete users['sales' + id];
            localStorage.setItem('users', JSON.stringify(users));
            users = localStorage.getItem('users');
            users = JSON.parse(users);

            var data_to_array = [];

            for (i = 1; i <= nr_max; i++) {
                id = nr_max;
                suma1 = suma_sel1;
                suma2 = sales2_sel;
                var element_to_delete = document.getElementById("added_div");
                if (element_to_delete) {
                    element_to_delete.parentNode.removeChild(element_to_delete);
                }
                title_sel = users['title' + i];
                if (typeof title_sel == 'string') {
                    data_to_array.push({
                        "id": users['id' + i],
                        "title": users['title' + i],
                        "brand": users['brand' + i],
                        "sales": users['sales' + i],
                        "sales2": (parseInt(users['sales' + i]) / 1.1).toFixed(2),
                        "timeframe": users['timeframe' + i],
                        "timeframeyear": users['timeframeyear' + i]
                    });
                    allData = {
                        "getData": data_to_array
                    };
                    localStorage.setItem('allData', JSON.stringify(allData));
                    mustacheDo();
                    sales_sel = users['sales' + i];
                    sales_sel = parseInt(sales_sel);
                    sales2_sel = sales_sel / 1.1;
                    suma_sel1 = suma_sel1 + sales_sel;
                    suma_sel2 = suma_sel1 / 1.1;
                    ++nr_of_reg;
                    showSumms(nr_of_reg, suma_sel1, suma_sel2);
                } else {
                    showSumms(nr_of_reg, suma_sel1, suma_sel2);
                }
            }
        }
        var dialog2;
        dialog2 = $("#dialog-form2").dialog({
            autoOpen: false,
            height: 100,
            width: 400,
            modal: true,
            buttons: {
                "Remove": function() {
                    $('#users').remove();
                    $("#users-contain").append('<table id="users" class="ui-widget ui-widget-content"><thead><tr class="ui-widget-header "><th>ID</th><th>Title</th><th>Brand</th><th>Launch TimeFrame</th><th>Est. Sales Potential(USD)</th><th>Est. Sales Potential(CHF)</th><th>Status</th><th>Actions</th></tr></thead><tbody></tbody></table>');

                    delete_row1(id);
                    dialog2.dialog("close");
                },
                Cancel: function() {
                    dialog2.dialog("close");
                }
            }
        });
        dialog2.dialog("open");
    });
}
$(document).ready(function() {
    if (nr_max < 1) {
        var id = 0;
        var suma1 = 0;
        var suma2 = 0;
    } else {
        var title_sel = "";
        var brand_sel = "";
        var win_sel = "";
        var timeframe_sel = "";
        var timeframeyear_sel = "";
        var sales_sel = 0;
        var sales2_sel = 0;
        var suma_sel1 = 0;
        var suma_sel2 = 0;

        users = localStorage.getItem('users');
        users = JSON.parse(users);

        var data_to_array = [];



        for (i = 1; i <= nr_max; i++) {
            id = nr_max;
            suma1 = suma_sel1;
            suma2 = sales2_sel;
            var element_to_delete = document.getElementById("added_div");
            if (element_to_delete) {
                element_to_delete.parentNode.removeChild(element_to_delete);
            }

            title_sel = users['title' + i];
            if (typeof title_sel == 'string') {
                data_to_array.push({
                    "id": users['id' + i],
                    "title": users['title' + i],
                    "brand": users['brand' + i],
                    "sales": users['sales' + i],
                    "sales2": (parseInt(users['sales' + i]) / 1.1).toFixed(2),
                    "timeframe": users['timeframe' + i],
                    "timeframeyear": users['timeframeyear' + i]
                });
                allData = {
                    "getData": data_to_array
                };
                localStorage.setItem('allData', JSON.stringify(allData));

                sales_sel = users['sales' + i];
                sales_sel = parseInt(sales_sel);
                sales2_sel = sales_sel / 1.1;
                suma_sel1 = suma_sel1 + sales_sel;
                suma_sel2 = suma_sel1 / 1.1;

                ++nr_of_reg;
                showSumms(nr_of_reg, suma_sel1, suma_sel2);
            } else {
                showSumms(nr_of_reg, suma_sel1, suma_sel2);
            }
        }
    }
    var container = [];

    $(function() {
        var dialog, form,
            title = $("#title"),
            brand = $("#brand"),
            win = $("#win"),
            timeframe = $("#timeframe"),
            timeframeyear = $("#timeframeyear"),
            sales = $("#sales"),
            allFields = $([]).add(title).add(brand).add(sales),
            tips = $(".validateTips");

        function updateTips(t) {
            tips
                .text(t)
                .addClass("ui-state-highlight");
            setTimeout(function() {
                tips.removeClass("ui-state-highlight", 1500);
            }, 500);
        }

        function checkLength(o, n, min, max) {
            if (o.val().length > max || o.val().length < min) {
                o.addClass("ui-state-error");
                updateTips("Length of " + n + " must be between " +
                    min + " and " + max + ".");
                return false;
            } else {
                return true;
            }
        }

        function checkRegexp(o, regexp, n) {
            if (!(regexp.test(o.val()))) {
                o.addClass("ui-state-error");
                updateTips(n);
                return false;
            } else {
                return true;
            }
        }

        function addUser() {
            var valid = true;

            allFields.removeClass("ui-state-error");
            valid = valid && checkLength(title, "title", 3, 16);
            valid = valid && checkRegexp(title, /^[a-z]([0-9a-z_\s])+$/i, "Title may consist of a-z, 0-9, underscores, spaces and must begin with a letter.");
            valid = valid && checkRegexp(sales, /^[0-9]+$/i, "Sales may consist of 0-9.Minim 1 character.");
            if (valid) {
                ++id;
                var sales2 = parseInt(sales.val()) / 1.1;
                suma1 = suma1 + parseInt(sales.val());
                suma2 = suma1 / 1.1;
                if (id == 1) {
                    var users = new Object();
                    users = {
                        'id1': id, 
                        'title1' : title.val(),
                        'brand1': brand.val(),
                        'timeframe1' : timeframe.val(),
                        'win1' : win.val(),
                        'timeframeyear1' : timeframeyear.val(),
                        'sales1' : parseInt(sales.val())};
                    localStorage.setItem('users', JSON.stringify(users));
                } else {
                    users = localStorage.getItem('users');
                    users = JSON.parse(users);
                    users['id' + id] = id;
                    users['title' + id] = title.val();
                    users['brand' + id] = brand.val();
                    users['timeframe' + id] = timeframe.val();
                    users['win' + id] = win.val();
                    users['timeframeyear' + id] = timeframeyear.val();
                    users['sales' + id] = parseInt(sales.val());
                    localStorage.setItem('users', JSON.stringify(users));
                }

                var data_to_array = [];

                localStorage.removeItem('nr_max');
                ++nr_max;
                localStorage.setItem('nr_max', nr_max);
                var suma_sel1 = 0;
                var suma_sel2 = 0;
                var nr_of_reg = 0;
                for (i = 1; i <= nr_max; i++) {
                    var element_to_delete = document.getElementById("added_div");
                    if (element_to_delete) {
                        element_to_delete.parentNode.removeChild(element_to_delete);
                    }
                    title_sel = users['title' + i];
                    if (typeof title_sel == 'string') {
                        data_to_array.push({
                            "id": users['id' + i],
                            "title": users['title' + i],
                            "brand": users['brand' + i],
                            "sales": users['sales' + i],
                            "sales2": (parseInt(users['sales' + i]) / 1.1).toFixed(2),
                            "timeframe": users['timeframe' + i],
                            "timeframeyear": users['timeframeyear' + i]
                        });
                        allData = {
                            "getData": data_to_array
                        };
                        localStorage.setItem('allData', JSON.stringify(allData));

                        mustacheDo();

                        sales_sel = users['sales' + i];
                        sales_sel = parseInt(sales_sel);
                        sales2_sel = sales_sel / 1.1;
                        suma_sel1 = suma_sel1 + sales_sel;
                        suma_sel2 = suma_sel1 / 1.1;
                        ++nr_of_reg;
                        showSumms(nr_of_reg, suma_sel1, suma_sel2);
                    } else {
                        showSumms(nr_of_reg, suma_sel1, suma_sel2);
                    }
                }
                dialog.dialog("close");
            }
            return valid;
        }
        dialog = $("#dialog-form").dialog({
            autoOpen: false,
            height: 600,
            width: 500,
            modal: true,
            buttons: {
                "Create an account": addUser,
                Cancel: function() {
                    dialog.dialog("close");
                }
            },
            close: function() {
                form[0].reset();
                allFields.removeClass("ui-state-error");
            }
        });
        form = dialog.find("form").on("submit", function(event) {
            event.preventDefault();
            addUser();
        });

        $("#create-user").button().on("click", function() {
            dialog.dialog("open");
        });
    });

});