var urlFile = './sign-url.txt';
var newURL;
var oldURL;

function readTextFile(file)
{
    file += '?time=' + Date.now();
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                newURL = rawFile.responseText;
            }
        }
    }
    rawFile.send(null);
}

function loadSign() {
  readTextFile(urlFile);
  if( newURL != null && newURL != oldURL ) {
    document.getElementById('mainFrame').src = newURL;
    oldURL = newURL;
  }
}

window.onload = function() {
  loadSign();
  setInterval(loadSign, 10000);
};
