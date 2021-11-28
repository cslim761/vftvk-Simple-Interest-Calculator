function compute()
{
    //alert("what the heck!");
    var principal = document.getElementById("principal").value;

    if (principal <= 0) {
       alert("Please enter a positive number!");
       document.getElementById("principal").focus();
       return;
    }
    //alert("Value of Principal" + principal);
    var rate = document.getElementById("rate").value;
// var ratefloat = parsefloat(rate);
    //alert("Value of Rate " + rate);
    var years = document.getElementById("years").value;
//alert("years = " + years);
    var interest = parseFloat((parseFloat(principal) * parseInt(years) * parseFloat(rate)) /100.00).toFixed(2);
//alert("interest = " + interest);
    var year = new Date().getFullYear()+parseInt(years);
//alert("year = " + year);
    var amount = parseFloat(parseFloat(principal) + parseFloat(interest)).toFixed(2);

    //alert("Value of amount=" + amount.toString());
    document.getElementById("myresult").innerHTML="If you deposit \<mark\>"+principal+"\</mark\>,\<br\>at an interest rate of \<mark\>"+rate+"%\</mark\>\<br\>You will receive an amount of \<mark\>"+amount+"\</mark\>,\<br\>in the year \<mark\>"+year+"\</mark\>\<br\>";
    //document.getElementById("myresult").innerHTML = "Mother Fucker!";
}

function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval + "%";
}
        