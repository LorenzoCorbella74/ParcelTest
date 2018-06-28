// si importa gli stili SASS
import './style.scss';

// Si usa ES6
import {model} from './data'

const who = model.name;

document.getElementById('output').innerHTML = who + ' wants you!';