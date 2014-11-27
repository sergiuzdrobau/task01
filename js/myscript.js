$ = jQuery;
var nr_of_reg = 0; var nr_max = 0; nr_max = localStorage.getItem('nr_max');
if (typeof nr_max === 'undefined' || nr_max == null || nr_max == 0){
nr_max = 0;
id = nr_max;}
    function edit_row(id)
    {
      var dialog3, form,
      title = $( "#title3" ),
      brand = $( "#brand3" ),
      win = $( "#win3" ).val();
      timeframe = $( "#timeframe3" ).val();
      timeframeyear = $( "#timeframeyear3" ).val();
      sales = $( "#sales3" ),
      allFields = $( [] ).add( title ).add( brand ).add( sales ),
      tips = $( ".validateTips" );

    function updateTips( t ) {
      tips
        .text( t )
        .addClass( "ui-state-highlight" );
      setTimeout(function() {
        tips.removeClass( "ui-state-highlight", 1500 );
      }, 500 );
    }

    function checkLength( o, n, min, max ) {
      if ( o.val().length > max || o.val().length < min ) {
        o.addClass( "ui-state-error" );
        updateTips( "Length of " + n + " must be between " +
          min + " and " + max + "." );
        return false;
      } else {
        return true;
      }
    }

function checkRegexp( o, regexp, n ) {
      if ( !( regexp.test( o.val() ) ) ) {
        o.addClass( "ui-state-error" );
        updateTips( n );
        return false;
      } else {
        return true;
      }
    }

    dialog3 = $( "#dialog-form3" ).dialog({
      autoOpen: false,
      height: 600,
      width: 500,
      modal: true,
      buttons: {
        "Edit account": function(){
           var valid = true;
      allFields.removeClass( "ui-state-error" );
      valid = valid && checkLength( title, "title", 3, 16 );
      valid = valid && checkRegexp( title, /^[a-z]([0-9a-z_\s])+$/i, "Title may consist of a-z, 0-9, underscores, spaces and must begin with a letter." );
      valid = valid && checkRegexp( sales, /^[0-9]+$/i, "Sales may consist of 0-9.Minim 1 character." );
      if ( valid ) {
         $('#users').remove();
          $( "#users-contain" ).append( '<table id="users" class="ui-widget ui-widget-content"><thead><tr class="ui-widget-header "><th>ID</th><th>Title</th><th>Brand</th><th>Launch TimeFrame</th><th>Est. Sales Potential(USD)</th><th>Est. Sales Potential(CHF)</th><th>Status</th><th>Actions</th></tr></thead><tbody></tbody></table>' );
        var sales2 = parseInt(sales.val())/1.1;
        var suma1 = suma1+parseInt(sales.val());
        var suma2 = suma1/1.1;
      localStorage.setItem('title['+id+']', title.val());
      localStorage.setItem('brand['+id+']', brand.val());
      localStorage.setItem('timeframe['+id+']', timeframe);
      localStorage.setItem('timeframeyear['+id+']', timeframeyear);
      localStorage.setItem('sales['+id+']', parseInt(sales.val()));
var suma_sel1 = 0;
  for (i=1;i<=nr_max;i++)
  {
    var element_to_delete = document.getElementById("added_div");
        if (element_to_delete){element_to_delete.parentNode.removeChild(element_to_delete);}
        title_sel = localStorage.getItem('title['+i+']'); 
               if (typeof title_sel == 'string'){
        brand_sel = localStorage.getItem('brand['+i+']');
        timeframe_sel = localStorage.getItem('timeframe['+i+']');
        timeframeyear_sel = localStorage.getItem('timeframeyear['+i+']');
        sales_sel = localStorage.getItem('sales['+i+']');
        sales_sel = parseInt(sales_sel);
        sales2_sel = sales_sel/1.1;
        suma_sel1 = parseInt(suma_sel1 + sales_sel);
        suma_sel2 = parseInt(suma_sel1/1.1);

                  $( "#users tbody" ).append( "<tr>" +
          "<td>ML" + i + "</td>" +
          "<td>" + title_sel + "</td>" +
          "<td>" + brand_sel + "</td>" +
          "<td>" + timeframe_sel + " " +timeframeyear_sel + "</td>" +
          "<td>" + parseInt(sales_sel) + "</td>" +
          "<td>" + parseFloat(sales2_sel).toFixed(2) + "</td>" +
          "<td>To Be Launched</td>" +
          "<td><img style='cursor:pointer;' onclick='edit_row("+i+")' width='16px' height='16px' id='edit"+i+"' src='css/images/pencil.png'>  <img style='cursor:pointer;' onclick='delete_row("+i+")' width='16px' height='16px' id='delete"+i+"' src='css/images/delete.jpg'></td>" +
        "</tr>" );
        var added_div = document.createElement("div");
        added_div.style.fontSize = "14px";
        added_div.id = "added_div";
        added_div.innerHTML = '<p>#Of Market Launches: '+nr_of_reg+'</p> <p>Regional Total Amount of Estimated Sales Potential: '+suma_sel1+'</p> <p>Global Total Amount of Estimated Sales Potential: '+parseFloat(suma_sel2).toFixed(2)+'</p>';
        document.body.appendChild(added_div);
        }else {
        var added_div = document.createElement("div");
        added_div.style.fontSize = "14px";
        added_div.id = "added_div";
        added_div.innerHTML = '<p>#Of Market Launches: '+nr_of_reg+'</p> <p>Regional Total Amount of Estimated Sales Potential: '+suma_sel1+'</p> <p>Global Total Amount of Estimated Sales Potential: '+parseFloat(suma_sel2).toFixed(2)+'</p>';
        document.body.appendChild(added_div);      
        }
  }  dialog3.dialog( "close" );
      }      return valid;
        },
        Cancel: function() {
          dialog3.dialog( "close" );
        }
      }
    }); //dialog3 close
    var suma_sel1, suma_sel2; 
    title_sel = localStorage.getItem('title['+id+']');
    brand_sel = localStorage.getItem('brand['+id+']');
    timeframe_sel = localStorage.getItem('timeframe['+id+']');
    timeframeyear_sel = localStorage.getItem('timeframeyear['+id+']');
    sales_sel = localStorage.getItem('sales['+id+']');
    $('#title3').val(title_sel);
    $('#brand3').val(brand_sel);
    $('#sales3').val(sales_sel);
    $('#timeframe3').val(timeframe_sel);
    $('#timeframeyear3').val(timeframeyear_sel);
      dialog3.dialog( "open" );
    }
function delete_row(id){
  $( "#delete"+id ).on( "click", function() {
      function delete_row1(id){
        localStorage.removeItem('id['+id+']'); localStorage.removeItem('title['+id+']'); localStorage.removeItem('brand['+id+']');  localStorage.removeItem('timeframe['+id+']');  localStorage.removeItem('timeframeyear['+id+']'); localStorage.removeItem('sales['+id+']'); localStorage.removeItem('sales2['+id+']');
var title_sel = ""; var brand_sel = ""; var timeframe_sel = ""; var timeframeyear_sel = ""; var sales_sel = 0; var sales2_sel = 0; var suma_sel1 = 0; var suma_sel2 = 0; nr_of_reg = 0;
  for (i=1;i<=nr_max;i++)
  {
    id = nr_max; suma1 = suma_sel1; suma2 = sales2_sel;
    var element_to_delete = document.getElementById("added_div");
        if (element_to_delete){element_to_delete.parentNode.removeChild(element_to_delete);}
        title_sel = localStorage.getItem('title['+i+']'); 
               if (typeof title_sel == 'string'){
        title_sel = localStorage.getItem('title['+i+']'); 
        brand_sel = localStorage.getItem('brand['+i+']');
        timeframe_sel = localStorage.getItem('timeframe['+i+']');
        timeframeyear_sel = localStorage.getItem('timeframeyear['+i+']');
        sales_sel = localStorage.getItem('sales['+i+']');
        sales_sel = parseInt(sales_sel);
        sales2_sel = sales_sel/1.1;
        suma_sel1 = suma_sel1 + sales_sel;
        suma_sel2 = suma_sel1/1.1;
                  $( "#users tbody" ).append( "<tr>" +
          "<td>ML" + i + "</td>" +
          "<td>" + title_sel + "</td>" +
          "<td>" + brand_sel + "</td>" +
          "<td>" + timeframe_sel + " " +timeframeyear_sel + "</td>" +
          "<td>" + parseInt(sales_sel) + "</td>" +
          "<td>" + parseFloat(sales2_sel).toFixed(2) + "</td>" +
          "<td>To Be Launched</td>" +
          "<td><img style='cursor:pointer;' onclick='edit_row("+i+")' width='16px' height='16px' id='edit"+i+"' src='css/images/pencil.png'>  <img style='cursor:pointer;' onclick='delete_row("+i+")' width='16px' height='16px' id='delete"+i+"' src='css/images/delete.jpg'></td>" +
        "</tr>" );
                    ++nr_of_reg;
        var added_div = document.createElement("div");
        added_div.style.fontSize = "14px";
        added_div.id = "added_div";
        added_div.innerHTML = '<p>#Of Market Launches: '+nr_of_reg+'</p> <p>Regional Total Amount of Estimated Sales Potential: '+suma_sel1+'</p> <p>Global Total Amount of Estimated Sales Potential: '+parseFloat(suma_sel2).toFixed(2)+'</p>';
        document.body.appendChild(added_div);
        }else {
        var added_div = document.createElement("div");
        added_div.style.fontSize = "14px";
        added_div.id = "added_div";
        added_div.innerHTML = '<p>#Of Market Launches: '+nr_of_reg+'</p> <p>Regional Total Amount of Estimated Sales Potential: '+suma_sel1+'</p> <p>Global Total Amount of Estimated Sales Potential: '+parseFloat(suma_sel2).toFixed(2)+'</p>';
        document.body.appendChild(added_div);      
        }
  } 
      }
var dialog2;   
dialog2 = $( "#dialog-form2" ).dialog({
      autoOpen: false,
      height: 100,
      width: 400,
      modal: true,
      buttons: {
        "Remove": function() {
          $('#users').remove();
          $( "#users-contain" ).append( '<table id="users" class="ui-widget ui-widget-content"><thead><tr class="ui-widget-header "><th>ID</th><th>Title</th><th>Brand</th><th>Launch TimeFrame</th><th>Est. Sales Potential(USD)</th><th>Est. Sales Potential(CHF)</th><th>Status</th><th>Actions</th></tr></thead><tbody></tbody></table>' );

          delete_row1(id);
          dialog2.dialog( "close" );
        },
        Cancel: function() {
          dialog2.dialog( "close" );
        }
      }
    });
dialog2.dialog( "open" );  
    });
}
$( document ).ready(function() {
if (nr_max<1){
         var id=0;
    var suma1 = 0;
    var suma2 = 0;
 } else
 { var title_sel = "";
var brand_sel = "";
var timeframe_sel = "";
var timeframeyear_sel = "";
var sales_sel = 0;
var sales2_sel = 0;
var suma_sel1 = 0;
var suma_sel2 = 0;
  for (i=1;i<=nr_max;i++)
  {
    id = nr_max;
    suma1 = suma_sel1;
    suma2 = sales2_sel;
    var element_to_delete = document.getElementById("added_div");
        if (element_to_delete)
        {
          element_to_delete.parentNode.removeChild(element_to_delete);
        }
        title_sel = localStorage.getItem('title['+i+']'); 
               if (typeof title_sel == 'string'){
        title_sel = localStorage.getItem('title['+i+']'); 
        brand_sel = localStorage.getItem('brand['+i+']');
        timeframe_sel = localStorage.getItem('timeframe['+i+']');
        timeframeyear_sel = localStorage.getItem('timeframeyear['+i+']');
        sales_sel = localStorage.getItem('sales['+i+']');
        sales_sel = parseInt(sales_sel);
        sales2_sel = sales_sel/1.1;
        suma_sel1 = suma_sel1  + sales_sel;
        suma_sel2 = suma_sel1/1.1;
                  $( "#users tbody" ).append( "<tr>" +
          "<td>ML" + i + "</td>" +
          "<td>" + title_sel + "</td>" +
          "<td>" + brand_sel + "</td>" +
          "<td>" + timeframe_sel + " " +timeframeyear_sel + "</td>" +
          "<td>" + parseInt(sales_sel) + "</td>" +
          "<td>" + parseFloat(sales2_sel).toFixed(2) + "</td>" +
          "<td>To Be Launched</td>" +
          "<td><img style='cursor:pointer;' onclick='edit_row("+i+")' width='16px' height='16px' id='edit"+i+"' src='css/images/pencil.png'>  <img style='cursor:pointer;' onclick='delete_row("+i+")' width='16px' height='16px' id='delete"+i+"' src='css/images/delete.jpg'></td>" +
        "</tr>" );
       ++nr_of_reg;
        var added_div = document.createElement("div");
        added_div.style.fontSize = "14px";
        added_div.id = "added_div";
        added_div.innerHTML = '<p>#Of Market Launches: '+nr_of_reg+'</p> <p>Regional Total Amount of Estimated Sales Potential: '+suma_sel1+'</p> <p>Global Total Amount of Estimated Sales Potential: '+parseFloat(suma_sel2).toFixed(2)+'</p>';
        document.body.appendChild(added_div);
        }else {
        var added_div = document.createElement("div");
        added_div.style.fontSize = "14px";
        added_div.id = "added_div";
        added_div.innerHTML = '<p>#Of Market Launches: '+nr_of_reg+'</p> <p>Regional Total Amount of Estimated Sales Potential: '+suma_sel1+'</p> <p>Global Total Amount of Estimated Sales Potential: '+parseFloat(suma_sel2).toFixed(2)+'</p>';
        document.body.appendChild(added_div);
        }
  }
 }
var container = [];
$(function() {
    var dialog, form,
      title = $( "#title" ),
      brand = $( "#brand" ),
      win = $( "#win" ).val();
      timeframe = $( "#timeframe option:selected" ).val();
      timeframeyear = $( "#timeframeyear" ).val();
      sales = $( "#sales" ),
      allFields = $( [] ).add( title ).add( brand ).add( sales ),
      tips = $( ".validateTips" ); 
    function updateTips( t ) {
      tips
        .text( t )
        .addClass( "ui-state-highlight" );
      setTimeout(function() {
        tips.removeClass( "ui-state-highlight", 1500 );
      }, 500 );
    }
    function checkLength( o, n, min, max ) {
      if ( o.val().length > max || o.val().length < min ) {
        o.addClass( "ui-state-error" );
        updateTips( "Length of " + n + " must be between " +
          min + " and " + max + "." );
        return false;
      } else {
        return true;
      }
    }
function checkRegexp( o, regexp, n ) {
      if ( !( regexp.test( o.val() ) ) ) {
        o.addClass( "ui-state-error" );
        updateTips( n );
        return false;
      } else {
        return true;
      }
    }
    function addUser() {
      var valid = true;
      allFields.removeClass( "ui-state-error" );
      valid = valid && checkLength( title, "title", 3, 16 );
      valid = valid && checkRegexp( title, /^[a-z]([0-9a-z_\s])+$/i, "Title may consist of a-z, 0-9, underscores, spaces and must begin with a letter." );
      valid = valid && checkRegexp( sales, /^[0-9]+$/i, "Sales may consist of 0-9.Minim 1 character." );
      if ( valid ) {
      	++id;
      	var sales2 = parseInt(sales.val())/1.1;
      	suma1 = suma1+parseInt(sales.val());
      	suma2 = suma1/1.1;
      localStorage.setItem('id['+id+']', id);
      localStorage.setItem('title['+id+']', title.val());
      localStorage.setItem('brand['+id+']', brand.val());
      localStorage.setItem('timeframe['+id+']', timeframe);
      localStorage.setItem('timeframeyear['+id+']', timeframeyear);
      localStorage.setItem('sales['+id+']', parseInt(sales.val()));
      localStorage.setItem('sales2['+id+']', sales2);
      localStorage.removeItem('nr_max');
      ++nr_max;
      localStorage.setItem('nr_max', nr_max);
      var test = localStorage.getItem('nr_max');
   			var element_to_delete = document.getElementById("added_div");
   			if (element_to_delete)
   			{
   				element_to_delete.parentNode.removeChild(element_to_delete);
   			}
        $( "#users tbody" ).append( "<tr>" +
          "<td>ML" + id + "</td>" +
          "<td>" + title.val() + "</td>" +
          "<td>" + brand.val() + "</td>" +
          "<td>" + timeframe + " " +timeframeyear + "</td>" +
          "<td>" + parseInt(sales.val()) + "</td>" +
          "<td>" + parseFloat(sales2).toFixed(2) + "</td>" +
          "<td>To Be Launched</td>" +
          "<td><img style='cursor:pointer;' onclick='edit_row("+id+")' width='16px' height='16px' id='edit"+id+"' src='css/images/pencil.png'>  <img style='cursor:pointer;' onclick='delete_row("+id+")' width='16px' height='16px' id='delete"+id+"' src='css/images/delete.jpg'></td>" +
        "</tr>" );
       ++nr_of_reg;
        var added_div = document.createElement("div");
        added_div.style.fontSize = "14px";
        added_div.id = "added_div";
        added_div.innerHTML = '<p>#Of Market Launches: '+nr_of_reg+'</p> <p>Regional Total Amount of Estimated Sales Potential: '+suma1+'</p> <p>Global Total Amount of Estimated Sales Potential: '+parseFloat(suma2).toFixed(2)+'</p>';
        document.body.appendChild(added_div);
        dialog.dialog( "close" );
      }
      return valid;
    }
    dialog = $( "#dialog-form" ).dialog({
      autoOpen: false,
      height: 600,
      width: 500,
      modal: true,
      buttons: {
        "Create an account": addUser,
        Cancel: function() {
          dialog.dialog( "close" );
        }
      },
      close: function() {
        form[ 0 ].reset();
        allFields.removeClass( "ui-state-error" );
      }
    });
    form = dialog.find( "form" ).on( "submit", function( event ) {
      event.preventDefault();
      addUser();
    });

    $( "#create-user" ).button().on( "click", function() {
      dialog.dialog( "open" );
    });
  });
});
