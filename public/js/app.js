function toggle(x) {
   x.classList.toggle("change");
   document.getElementById('sidebar').classList.toggle('close');
 }
(function() {
   // var sectionOne = window.document.getElementById('section-1');
   // sectionOne.style.;
   // sectionOne.style.height = window.innerHeight;
   // Create our shared stylesheet:
   
   function windowResized() {
      var height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
      var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
      console.log('width: ' + width + ' height: ' + height)
      var sectionOne = document.getElementById('section-1');
      sectionOne.style.height = (height - 40) + 'px';
   }
   window.addEventListener("resize", windowResized);
   windowResized();
})();


// #707070