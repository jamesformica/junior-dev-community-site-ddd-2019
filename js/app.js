window.addEventListener('load', function() {
  console.log('💜 all systems are go!')

  window.setInterval(() => this.document.getElementById("parrot").append("Hello"), 2000)
  this.document.querySelector(".jd_footer").addEventListener("click", function(){
    window.alert("Thanks for clicking, you're awesome!");
  })
  // MOAR JAVASCRIPT
})