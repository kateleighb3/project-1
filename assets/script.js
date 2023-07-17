// Sample data - replace with your own data
const data = [
    { title: 'Comic Book 1', category: 'Comic Books' },
    { title: 'Comic Book 2', category: 'Comic Books' },
    { title: 'Movie 1', category: 'Movies' },
    { title: 'Movie 2', category: 'Movies' }
  ];

  
  // Get references to HTML elements
  const searchInput = document.getElementById('search-input');
  const searchButton = document.getElementById('search-button');
  const searchResults = document.getElementById('search-results');
  
  // Function to perform search
  function performSearch() {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredData = data.filter(item => {
      const title = item.title.toLowerCase();
      return title.includes(searchTerm);
    });
  
    displayResults(filteredData);
  }
  
  // Function to display search results
  function displayResults(results) {
    searchResults.innerHTML = '';
    if (results.length > 0) {
      results.forEach(item => {
        const resultItem = document.createElement('div');
        resultItem.innerHTML = `${item.title} - ${item.category}`;
        searchResults.appendChild(resultItem);
      });
    } else {
      const noResults = document.createElement('div');
      noResults.textContent = 'No results found.';
      searchResults.appendChild(noResults);
    }
  }
  
//const containerDiv = document.getElementById("divImage");

var images = [
  'batman-1.jpg', 
  'spiderman-1.jpg', 
  'superman-1.jpeg', 
  'the-dc-gang.jpg',
  'thor-1.jpg',
  ];
  
  $(function () {
    var i = 0;
    
    $('#body').css('background-image', 'url(./assets/images/' + images[i] + ')', 
    'background-size', 'cover');
    setInterval (function () {
      i++;
      if (i == images.length) {
        i = 0;
      }
      $('#body').fadeOut('slow', function (){
      $(this).css('background-image', 'url(./assets/images/' + images[i] + ')',
      'background-size', 'cover');
      $(this).fadeIn('slow');
      });
    }, 5000);
  
      });
  


  // Event listener for search button click
  searchButton.addEventListener('click', performSearch);
  
  