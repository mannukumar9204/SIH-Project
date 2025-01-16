function switchTab(tab) {
    const loginTab = document.getElementById('loginTab');
    const signupTab = document.getElementById('signupTab');
    document.querySelector(.tab:nth-child(${tabName === 'login' ? '1' : '2'})).classList.add('active');
    document.querySelector(.tab:nth-child(${tabName === 'login' ? '1' : '2'})).classList.add('active');
  
    if (tab === 'login') {
        document.getElementById(${tabName}Tab).classList.add('active');
        signupTab.classList.remove('active');
        loginTabButton.classList.add('active');
        signupTabButton.classList.remove('active');
    } else {
        document.getElementById(${tabName}Tab).classList.add('active');
        loginTab.classList.remove('active');
        signupTabButton.classList.add('active');
        loginTabButton.classList.remove('active');
    }
  }
  
  function togglePreview() {
    const previewContent = document.getElementById('previewContent');
    if (previewContent.style.display === 'block') {
        previewContent.style.display = 'none';
    } else {
        previewContent.style.display = 'block';
    }
  }
  
  function handleSubmit(event) {
    event.preventDefault();
    alert('Form submitted');
  }
