'use strict'

setTimeout(function(){
    document.querySelector('#preloader').classList.add('esconder');
    document.querySelector('header').classList.remove('esconder');
    document.querySelector('main').classList.remove('esconder');
    document.querySelector('footer').classList.remove('esconder');
  }, 5000);