var btntranslate = document.querySelector("#btn-translate");
var txtinput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");
var serverURL = "https://api.funtranslations.com/translate/minion.json";
 

function getTranslationURL(text){
    return serverURL + "?" + "text=" +text;
}

function errorHadler(error){
    console.log("error accured "+error)
    alert("somthing wrong with sever : stry again after some time ")
}



function clickEventHandler() {
    // outputDiv.innerText = "alsfoirgk   "+ txtinput.value;

    var inputText = txtinput.value;


    fetch(getTranslationURL(inputText))
    .then(Response => Response.json())
    .then(json =>        {
        var translatedtext = json.contents.translated;
        outputDiv.innerText = translatedtext;
    })
    .catch(errorHadler)
}




btntranslate.addEventListener("click", clickEventHandler)
