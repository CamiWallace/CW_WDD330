import { makeRequest } from './authHelpers.js';
import auth from './auth';

const authObject = new auth;

const form = document.getElementById("loginForm");
form.querySelector('button').addEventListener('click', ()=> {
    authObject.login();
})

