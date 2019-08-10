window.addEventListener('load', function() {
  console.log('💜 all systems are go!')

  window.setInterval(() => this.document.getElementById("parrot").append("Hello"), 2000)
  this.document.querySelector(".jd_footer").addEventListener("click", function(){
    window.alert("Thanks for clicking, you're awesome!");
  })

  this.document.getElementById('click-me-pls').addEventListener("click", function() {
    document.body.classList.add('dog')

    setTimeout(function() {
      document.body.classList.remove('dog')
    }, 2000)
  })
  // MOAR JAVASCRIPT
})