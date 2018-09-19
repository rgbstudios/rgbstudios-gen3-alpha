window.onload = function() {

	//meta.js
	$('*').addClass(cssClass);



  let url = new URL(window.location.href);
  console.log(url);
  let q = url.searchParams.get('q');
  if(q!='') {
    $('#navSearch').val(q);
    doSearch();
  }


  //https://stackoverflow.com/questions/12115833/adding-a-slide-effect-to-bootstrap-dropdown
  // Add slideDown animation to Bootstrap dropdown when expanding.
  $('.dropdown').on('show.bs.dropdown', function() {
    $(this).find('.dropdown-menu').first().stop(true, true).slideDown();
  });

  // Add slideUp animation to Bootstrap dropdown when collapsing.
  $('.dropdown').on('hide.bs.dropdown', function() {
    $(this).find('.dropdown-menu').first().stop(true, true).slideUp();
  });

  $('#navSearch').on('keyup', doSearch);
  $('#searchForm').on('submit', function(e) { //hit enter in input or click button
    e.preventDefault();
    console.log('searchin...');
    $('#navRgbText').click();
    window.open('../../index.html/?q=' + $('#navSearch').val(), '_self');
  });

}

function doSearch() {
  let itemNames = document.getElementsByClassName('itemName');
  let numResults = 0;
  for(let i=0; i<itemNames.length; i++) {
    if(itemNames[i].innerHTML.toLowerCase().indexOf($('#navSearch').val().toLowerCase() )!=-1) {
      itemNames[i].parentNode.parentNode.classList.remove('invisible');
      numResults++;
    } else {
      itemNames[i].parentNode.parentNode.classList.add('invisible');

    }
  }

  if(numResults==0) {
    $('#noResultsP').html('No results found for ' + $('#navSearch').val() + '.<br>Click <a href="../../index.html">here</a> to return home.' );
  } else {
    $('#noResultsP').html('');
  }
}