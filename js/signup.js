var inputTags=document.querySelectorAll("input")
var selectTags=document.querySelectorAll("select")
console.log(inputTags)
function storeTheData()
{
    var fName=inputTags[0].value
    var sName=inputTags[1].value
    var mandE=inputTags[2].value
    var pass=inputTags[3].value
    var dd=selectTags[0].value
    var mo=selectTags[1].value
    var yy=selectTags[2].value
    localStorage.setItem("FirstName",fName)
    localStorage.setItem("SecondName",sName)
    localStorage.setItem("ModAndEmail",mandE)
    localStorage.setItem("password",pass)
    localStorage.setItem("date",dd)
    localStorage.setItem("month",mo)
    localStorage.setItem("year",yy)
}
function genderSel(gen)
{
    var gender=gen;
    localStorage.setItem("gender",gender)
}