window.onload = function() {

	//meta.js
	$('*').addClass(cssClass);

  //https://stackoverflow.com/questions/12115833/adding-a-slide-effect-to-bootstrap-dropdown
  // Add slideDown animation to Bootstrap dropdown when expanding.
  $('.dropdown').on('show.bs.dropdown', function() {
    $(this).find('.dropdown-menu').first().stop(true, true).slideDown();
  });

  // Add slideUp animation to Bootstrap dropdown when collapsing.
  $('.dropdown').on('hide.bs.dropdown', function() {
    $(this).find('.dropdown-menu').first().stop(true, true).slideUp();
  });

  $('#navSearch').on('keyup', function() {

  	let itemNames = document.getElementsByClassName('itemName');
  	for(let i=0; i<itemNames.length; i++) {
  		if(itemNames[i].innerHTML.toLowerCase().indexOf($(this).val().toLowerCase() )!=-1) {
  			itemNames[i].parentNode.parentNode.classList.remove('invisible');

  		} else {
  			itemNames[i].parentNode.parentNode.classList.add('invisible');

  		}
  	}
  });

}