var newURL;
var oldURL;

function readTextFile(file)
{
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

window.onload = function() {
  readTextFile('./test.txt');
  if( newURL != null && newURL != oldURL ) {
    document.getElementById('mainFrame').src = newURL;
    oldURL = newURL;
  }
};
