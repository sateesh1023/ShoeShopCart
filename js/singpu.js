var inputTags=document.querySelectorAll("input")
var selectTags=document.querySelectorAll("select")
function storeTheData()
{
    var fName=inputTags[0].value;
    var sName=inputTags[1].value;
    var mandE=inputTags[2].value;
    var pass=inputTags[3].value;
    var dd=selectTags[0].value
    var mo=selectTags[1].value
    var yy=selectTags[2].value
    localStorage.setItem("FirstName",fName)
    localStorage.setItem("SecondName",sName)
    localStorage.setItem("ModAndEmail",mandE)
    localStorage.setItem("password",pass)
    localStorage.setItem("date",dd)
    localStorage.setItem("Month",mo)
    localStorage.setItem("year",yy)
}
function genderSel(gen)
{
    var gender=gen;
    localStorage.setItem("gender",gender)
}



function data()
{
    var passs=localStorage.getItem("password")
    var pass1=document.getElementById("password").value
    localStorage.setItem("pass",pass1)

    if(passs==pass1)
    {
        document.getElementById("msg").innerHTML="Valid password"
        document.getElementById("msg").style.color="green"

    }
    else{
        document.getElementById("msg").innerHTML="invalid password"
        document.getElementById("msg").style.color="red"
    }

   var num=localStorage.getItem("ModAndEmail")
   var num1=document.getElementById("input").value
   localStorage.setItem("eemail",num1)

   if(num==num1)
   {
    document.getElementById("email").innerHTML="valid Email"
    document.getElementById("email").style.color="green"
   }
   else{
    document.getElementById("email").innerHTML="Invalid Email"
    document.getElementById("email").style.color="red"
   }
}