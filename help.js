// The Javascript to help with the html file

    var n1 = document.getElementById("num1");       // Introducing new varibales which will have values of inputs.
    var n2 = document.getElementById("num2");
    var n3 = document.getElementById("num3");
    var n4 = document.getElementById("num4");
    var table = document.getElementById("table")

    function handleClick(e)      // This is the event handler checks for errors and prints them out
    {
        console.log(e)
        e.preventDefault();

        if (n1.value>= n2.value || n3.value>= n4.value )    // This is to make sure start number is smaller than end number.
        {
            alert("Starting Number cannot be smaller than end number");
        }
        else if (n1.value < -50 || n1.value > 50 ||
                 n2.value < -50 || n2.value > 50 ||
                 n3.value < -50 || n3.value > 50 ||
                 n4.value < -50 || n4.value > 50 ) 
        {
            alert("Your input is not between -50 and 50");                // Checks if inout is between the limits.
        }
        else 
        {                                                               // If everything is true then it will start to print the table
            var tableMaterial = "<tr><td class=\"th\"></td>";
            for (var i = n1.value;i <= n2.value;i++)
            {
                tableMaterial += "<td class=\"th\">" + i + "</td>";
            }
            tableMaterial += "</tr>";
            for(var j = n3.value; j <= n4.value;j++)
            {
                tableMaterial += "<tr>";
                tableMaterial += "<td class=\"th\">" + j + "</td>";
                for (var i = n1.value; i <= n2.value; i++)
                {
                    tableMaterial += "<td>" + (i *j) + "</td>";
                }
                tableMaterial += "</tr>";
            }
                table.innerHTML = tableMaterial;
        }

// all the Jqueery Stuff: https://www.sitepoint.com/basic-jquery-form-validation-tutorial/
// I used the above example as a starting point.
            $().ready(function()
            {
                $('#form').validate(
                    {
                        rules:{
                            num1:{
                                required:true,
                                Range:[-50,50],
                                compare:{
                                    type:'less than',
                                    el:'#n2'
                                }
                            },
                            num2:{
                                required:true,
                                Range:[-50,50],
                                compare:{
                                    type:'greater than',
                                    el:'#n1'
                                }
                            },
                            num3:{
                                required:true,
                                Range:[-50,50],
                                compare:{
                                    type:'less than',
                                    el:'#n4'
                                }
                            },
                            num4:{
                                required:true,
                                Range:[-50,50],
                                compare:{
                                    type:'less than',
                                    el:'#n3'
                                }
                            },
                        }
                    });
                $('#form').change(function()
                {
                    $('#form').valid();
                })
            })
    }

