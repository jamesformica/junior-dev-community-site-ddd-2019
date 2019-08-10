window.addEventListener('load', function() {
  console.log('💜 all systems are go!')

  window.setInterval(() => this.document.getElementById("parrot").append("Hello"), 2000)
  // MOAR JAVASCRIPT
})