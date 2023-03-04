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
                return rawFile.responseText;
                
            }
        }
    }
    rawFile.send(null);
}

window.onload = function() {
  var newURL = readTextFile('./test.txt');
  document.getElementById('mainFrame').src = newURL;
};
