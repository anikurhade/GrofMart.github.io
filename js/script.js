if(form!=null)
{
    console.log("hello");
form.addEventListener('submit',(event)=>{
   event.preventDefault();
   validate();   
})
}

function ValidateEmail(inputText)
  {
  var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if(inputText.value.match(mailformat))
  {
  alert("Valid email address!");
  document.form1.text1.focus();
  return true;
  }
  else
  {
  alert("You have entered an invalid email address!");
 
  return false;
  }
  }
//------------------------------------Cookies---------------------------------
function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
  function setCookie(cname,cvalue,exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }

    // Error Message Function
function setErrorMsg(input,errormsgs)
{
const formControl=input.parentElement;
const small=formControl.querySelector('small');
formControl.className="form-control error";
small.innerText=errormsgs;
}
//Success Message 
function setSuccessmsg(input)
{
    const formControl=input.parentElement;
    formControl.className="form-control success";
}
 