
$(()=>{
  // check login status
  checkUserId();

  // from https://api.jquerymobile.com/jquery.mobile.navigate/
  // route each link click through jQ mobile navigate.
  $('a').on('click', function(e) {
    e.preventDefault();
    if ($(this).attr('data-action') === 'log-out') {
      sessionStorage.clear() // clear session on logout
    }
    $.mobile.navigate( $(this).attr( "href" ));
  });

  // listen for event on login form submit.
  // check the fields and save a new session if successful.
	$(document).on('submit', '#login-form', function(e){
		e.preventDefault();
		checkLoginForm();
	})

  // listen for navigation and color footer icons
  // based on the hash in the address bar.
  $(window).on('navigate', function(e) {
    const windowHash = window.location.hash.split('#')[1]
    $('footer li a').each(function(e) {
      const hash = $(this).attr('href').split('#')[1]
      if (hash === windowHash) {
        $(this).parent().addClass('active')
      } else {
        $(this).parent().removeClass('active')
      }
    })
  });
})
