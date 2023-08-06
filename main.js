function showPage1() {
    var current = document.querySelector('.introcontainer');
    var next = document.querySelector('#first');
  
    current.style.display = "none";
//   next.style.display = "block";
  next.classList.add('active');
  }
  
  function showPage2() {
    var current = document.querySelector('.step');
    var next = document.querySelector('#second');
  if(validateForm(current)){
    current.style.display = "none";
  next.style.display = "block";
  // next.classList.add('active');
  }
    
  }

  function showSubmit() {
    var current = document.querySelector('#second');
    var next = document.querySelector('#third');
    if (!validateForm(current)) {
      alert("Please fill out all required fields.");
      return;
  }
    current.style.display = "none";
  next.style.display = "block";
  // next.classList.add('active');
  }

  function showPreviousPage(currentPage, previousPage) {
    currentPage.style.display = "none";
    previousPage.style.display = "block"; // or previousPage.classList.add('active'); 
  }

  function toggleTextarea() {
    var textarea = document.querySelector('#additionalMessage');
      var noRadio = document.querySelector('#noIssues');
     
      if (noRadio) {
        textarea.style.display = 'block';
      }
  }
  function noTextarea() {
    var textarea = document.querySelector('#additionalMessage');
      var yesRadio = document.querySelector("#yesIssues");
       if(yesRadio){
        textarea.style.display = 'none';
      }
  }

  function validateForm(formSection) {
    var inputs = formSection.querySelectorAll('input[required]');
    for (var i = 0; i < inputs.length; i++) {
      if (!inputs[i].value) {
        alert("Please fill out all required fields.");
        return false;
      }
    }
    return true;
  }