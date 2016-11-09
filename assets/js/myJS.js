var ramText="256MB-512MB";
var hddText="10GB+";
var archText="32-Bit";
var netText="Yes"

var ramChange = function(ram){
  var liRam = $("#selectionRAM");
  switch ($(ram).attr("value")) {
    case "256" :
    ramText = "256MB-512MB"
    //console.log(ramText);
    break;
    case "512" :
    ramText = "512MB-1GB"
    //console.log(2);
    break;
    case "1" :
    ramText = "1GB-2GB"
    //console.log(3);
    break;
    case "2" :
    ramText = "2GB+"
    //console.log(4);
    break;
    default:
    break;
  }
  liRam.text("RAM = " + ramText);
}

var archChange = function(arch){
  var liArch = $("#selectionArch");
  switch ($(arch).attr("value")) {
    case "32" :
    archText = "32-Bit"
    //console.log(ramText);
    break;
    case "64" :
    archText = "64-Bit"
    //console.log(2);
    break;
    default:
    break;
  }
  liArch.text("Architecture = " + archText);
}

var netChange = function(net){
  var liNet = $("#selectionNet");
  switch ($(net).attr("value")) {
    case "Yes" :
    var netText = "Connected"
    //console.log(ramText);
    break;
    case "No" :
    var netText = "Disconnected"
    //console.log(2);
    break;
    default:
    break;
  }
  liNet.text("Internet - " + netText);
}

var hddChange = function(hdd){
  var liHdd = $("#selectionHDD");
  switch ($(hdd).attr("value")) {
    case "5" :
    var hddText = "5GB or Less"
    //console.log(ramText);
    break;
    case "8" :
    var hddText = "5GB-8GB"
    //console.log(2);
    break;
    case "10" :
    var hddText = "8GB-10GB"
    //console.log(3);
    break;
    case "20" :
    var hddText = "10GB+"
    //console.log(4);
    break;
    default:
    break;
  }
  liHdd.text("HDD Size = " + hddText);
}

var details = function(){
  switch (ramText) {
    case "256MB-512MB" :
    if (archText === "32-Bit") {
      $("#mint").attr("hidden", true);
      $("#ppmint").attr("hidden", false);
      $("#fedora").attr("hidden", true);
      $("#ubuntu").attr("hidden", true);
    } else {
      alert("Not enough ram to run 64-bit");
    }
    break;
    case "512MB-1GB" :
    $("#mint").attr("hidden", false);
    $("#ppmint").attr("hidden", true);
    $("#fedora").attr("hidden", true);
    $("#ubuntu").attr("hidden", true);
    //console.log(ramText);
    break;
    case "1GB-2GB" :
    $("#mint").attr("hidden", true);
    $("#ppmint").attr("hidden", true);
    $("#fedora").attr("hidden", false);
    $("#ubuntu").attr("hidden", true);
    //console.log(ramText);
    break;
    case "2GB+" :
    $("#mint").attr("hidden", true);
    $("#ppmint").attr("hidden", true);
    $("#fedora").attr("hidden", true);
    $("#ubuntu").attr("hidden", false);
    //console.log(ramText);
    break;
    default:
    break;
  }
}

function bigImg(x) {
    x.style.height = "700px";
    x.style.width = "550px";
}

function normalImg(x) {
    x.style.height = "400px";
    x.style.width = "300px";
}

//Gets saved items from localStorage
$('#email').val(localStorage.getItem('email'));
$('#name').val(localStorage.getItem('name'));
$('#message').val(localStorage.getItem('message'));

//Saves items to localStorage
var inputName = function() {
  var name = $('#name').val();
  localStorage.setItem('name', name);
}

var inputEmail = function() {
  var email = $('#email').val();
  localStorage.setItem('email', email);
}

var inputMessage = function() {
  var message = $('#message').val();
  localStorage.setItem('message', message);
}

/*====================================
 CUSTOM LINKS SCROLLING FUNCTION
======================================*/

$('a[href*=#]').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
   && location.hostname == this.hostname) {
        var $target = $(this.hash);
        $target = $target.length && $target
        || $('[name=' + this.hash.slice(1) + ']');
        if ($target.length) {
            var targetOffset = $target.offset().top;
            $('html,body')
            .animate({ scrollTop: targetOffset }, 800); //set scroll speed here
            return false;
        }
    }
});
/*====================================
VAGAS SLIDESHOW SCRIPTS
======================================*/
var home = '';
var overlay = '';
var checkTitle = $(".title").text();
switch (checkTitle) {
  case "Pierce Jordan":
  home = 'assets/img/1.jpg';
  overlay = 'assets/plugins/vegas/overlays/14.png'
  break;
  case "Linux Distro":
  home = '../img/5.jpg';
  overlay = '../plugins/vegas/overlays/15.png'
  break;
  case "Install Ubuntu":
  home = '../img/ubuntu-logo.jpg';
  overlay = '../plugins/vegas/overlays/13.png'
  break;
  case "Hurling":
  home = '../img/hurling.png';
  overlay = '../plugins/vegas/overlays/12.png'
  break;
  case "Quit Smoking":
  home = '../img/quit.jpg';
  overlay = '../plugins/vegas/overlays/11.png'
  break;
  case "Travels Scotland":
  home = '../img/Scotland.jpg';
  overlay = '../plugins/vegas/overlays/10.png'
  break;
  default:
}
$(function () {
    $.vegas('slideshow', {
        backgrounds: [
          { src: home, fade: 1000, delay: 9000 }, //CHANGE THESE IMAGE WITH YOUR ORIGINAL IMAGES


        ]
    })('overlay', {
        /** SLIDESHOW OVERLAY IMAGE **/
        src: overlay // THERE ARE TOTAL 01 TO 15 .png IMAGES AT THE PATH GIVEN, WHICH YOU CAN USE HERE
    });

});
