<table id="users" class="ui-widget ui-widget-content">
                <thead>
                    <tr class="ui-widget-header ">
                        <th>ID<img src="css/images/arrowup.jpg" id = "id_asc"  style="position:relative; margin-bottom: 10px; margin-left: 10px; cursor:pointer;">  
                              <img src="css/images/arrowdown.png"  id="id_desc"  style="position:relative;  margin-left: 20px; cursor: pointer;"></th>
                        <th>Title</th>
                        <th>Brand</th>
                        <th>Launch TimeFrame</th>
                        <th>Est. Sales Potential(USD)</th>
                        <th>Est. Sales Potential(CHF)</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {{#getData}}
                    <tr>
                        <td>ML{{id}}</td>
                        <td>{{title}}</td>
                        <td>{{brand}}</td>
                        <td>{{timeframe}} {{timeframeyear}}</td>
                        <td>{{sales}}</td>
                        <td>{{sales2}}</td>
                        <td>To Be Launched</td>
                        <td><img style="cursor:pointer;" onclick="edit_row({{id}})" width='16px' height='16px' id='edit{{id}}' src='css/images/pencil.png'> <img style='cursor:pointer;' onclick='delete_row({{id}})' width='16px' height='16px' id='delete{{id}}' src='css/images/delete.jpg'>
                        </td>
                    </tr>
                    {{/getData}}
                </tbody>
            </table>