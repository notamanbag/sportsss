function showContent(zodiac) {
    // Hide all content
    const contents = document.querySelectorAll('.content');
    contents.forEach(content => content.classList.remove('active'));

    // Remove active class from all tabs
    const tabs = document.querySelectorAll('.tabs li');
    tabs.forEach(tab => tab.classList.remove('active'));

    // Show selected content
    document.getElementById(zodiac).classList.add('active');

    // Add active class to selected tab
    event.target.classList.add('active');
  }

  function rotateBox(zodiac) {
    const front = document.getElementById(zodiac + '-front');
    const back = document.getElementById(zodiac + '-back');
    
    // Rotate the box
    front.parentElement.classList.toggle('rotate');
    
    // Toggle showing the zodiac prediction content after rotation
    setTimeout(() => {
      front.style.display = front.style.display === 'none' ? 'flex' : 'none';
      back.style.display = back.style.display === 'block' ? 'none' : 'block';
    }, 1000);
  }