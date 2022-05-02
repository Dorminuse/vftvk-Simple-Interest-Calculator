function compute()
{
/**
*Creation of variables principal, rate, years and interest
 */
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;
/**
* The logic below converts the 'No of Years'
into the actual year in the future. 
*/
    var year = new Date().getFullYear()+parseInt(years);
    p = document.getElementById("principal").value;
        
    if (p <= 0 ) {
        alert("Enter a positive number");
        document.getElementById("principal").focus();
        return;
    }
    document.getElementById("result").innerHTML='If you deposit <span class="highlight">'+principal+'</span>,\<br\>at an interest rate of <span class="highlight">'+rate+'%</span>\<br\>You will receive an amount of <span class="highlight">'+interest+'</span>,\<br\>in the year <span class="highlight">'+year+'</span>\<br\>'
}     
/**
* The function below reads the value of the range slider
and displays it the <span> adjacent to the slider.
*/
function updateRate()
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}