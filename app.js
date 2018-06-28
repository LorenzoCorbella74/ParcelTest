// si importa gli stili SASS
import './style.scss';

// Si usa ES6!!
import { model } from './data'


window.onload = function () {

    const who = model.name;

    document.getElementById('output').innerHTML = who + ' wants you!';

    /*
     si carica dinamicamente un modulo solo quando richiesto!!!
     SOURCE: https://hackernoon.com/code-splitting-with-parcel-web-app-bundler-fe06cc3a20da
    */
    document.querySelector("#bt").addEventListener('click', function (evt) {
        console.log("Button Clicked");
        import ('./someModule').then(function (page) {
            page.render(document.querySelector(".holder"));
        });
    });
}