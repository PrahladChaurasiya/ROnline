function openLogin() {
				x = document.getElementById("login-div");
				x.style.display = "block";
				var x = document.getElementById("signup-div");
				x.style.display = "none";
				x = document.getElementById("login-div");
				x.style.display = "block";
				x = document.getElementById("forgot-password-div");
				x.style.display = "none";
			}

function openSignUp() {
	
				x = document.getElementById("signup-div");
				x.style.display = "block";
				var x = document.getElementById("login-div");
				x.style.display = "none";
				x = document.getElementById("forgot-password-div");
				x.style.display = "none";
				
			}
			
			
			
			function openForgotPassword() {
				var loginDiv = document.getElementById("login-div");
				var signUpDiv = document.getElementById("signup-div");
				var forgotPasswordDiv = document.getElementById("forgot-password-div");
				loginDiv.style.display = "none";
				signUpDiv.style.display = "none";
				forgotPasswordDiv.style.display = "block";
			}

			// Fading Animation 

			var animateHTML = function() {
			var elems;
			var windowHeight;
			function init() {
				
				elems = document.querySelectorAll('.hidden');
				windowHeight = window.innerHeight;
				addEventHandlers();
				checkPosition();
			}
			function addEventHandlers() {
				
				window.addEventListener('scroll', checkPosition);
				window.addEventListener('resize', init);
			}
			function checkPosition() {
				for (var i = 0; i < elems.length; i++) {
				var positionFromTop = elems[i].getBoundingClientRect().top;
				if (positionFromTop - windowHeight <= 0) {
					elems[i].className = elems[i].className.replace(
					'hidden',
					'fade-in-element'
					);
				}
				}
			}
			return {
				init: init
			};
			};
			animateHTML().init();
