var dark = false;
document.cookie = "theme=light";

var thanks = false;
window.onload = function()
{
    thanks = false;
    const query = window.location.search;
    const urlParams = new URLSearchParams(query);
    const theme = urlParams.get('theme');
    const thankyou = urlParams.get('thanks');
    const name = urlParams.get('name');
    const email = urlParams.get('email');
    if( theme == "dark")
        dark = true;
    if( theme == "light")
        dark = false;
    if( thankyou == 'true')
    {
        thanks = true;
        thankYouPage(name, email);
    }
    
    setTheme();
    console.log(thankyou);
}



function getTheme(){
    var x = document.cookie;
    var themeIdx = x.indexOf("theme=");
    var theme = x.substr(themeIdx+6,x.length);
    if( theme == "light"){
        dark = false;
    }
    if( theme == "dark" ){
        dark = true;
    }
    //console.log(theme);
    return theme;
}
function adjustTheme(){
    dark = !dark;
    setTheme();
}
function setTheme() {
    if( dark ){
        document.getElementById("theme").setAttribute("href", "dark-theme.css");
        document.cookie = "theme=dark";
        document.getElementById("themebutton").setAttribute("src", "lightmode.png");
        console.log(getTheme());
        if( !thanks )
        {
            window.history.replaceState(null, null, "?theme=dark");
        }
    }
    else if ( !dark ){
        document.getElementById("theme").setAttribute("href", "light-theme.css");
        document.cookie = "theme=light";
        document.getElementById("themebutton").setAttribute("src", "darkmode.png");
        console.log(getTheme());
        if( !thanks )
        {
            window.history.replaceState(null, null, "?theme=light");
        }
    }
    //console.log(x);
}
function goTo( target )
{
    if( dark )
    {
        window.location = target + "?theme=dark"
    }
    else{
        window.location = target + "?theme=light"
    }
}
function $(id) {
    return document.getElementById(id);
}

function getInput()
{
    thanks = true;
    var email = $("email").value;
    var name = $("name").value;
    var darkString = ( dark ) ? "dark" : "light";
    window.location = "thanks.html?theme=" + darkString + "&name="+name + "&email=" + email+"&thanks=true";
}
function thankYouPage( name, email ){
    $("first").innerHTML = "Thank you for your submission "+ name + ".";
    if( email != "" )
    {
        $("second").innerHTML = "An email will be sent to " + email + " within 24 hours!";
    }
    else
        $("second").style.padding = "0px";
}
