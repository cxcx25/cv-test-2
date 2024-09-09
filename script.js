                                                           document.addEventListener('DOMContentLoaded', function() {
                                                               const links = document.querySelectorAll('nav ul li a');
                                                               const contentContainer = document.getElementById('content-container');

                                                               links.forEach(link => {
                                                                   link.addEventListener('click', function(event) {
                                                                       event.preventDefault();
                                                                       const target = this.dataset.target;
                                                                       getContent(target);
                                                                   });
                                                               });

                                                               function getContent(target) {
                                                                   const xhr = new XMLHttpRequest();
                                                                   xhr.open('GET', `image/${target}.html`, true);

                                                                   xhr.onload = function() {
                                                                       if (xhr.status >= 200 && xhr.status < 400) {
                                                                           contentContainer.innerHTML = xhr.responseText;
                                                                       } else {
                                                                           console.error("Request failed. Status:", xhr.status);
                                                                       }
                                                                   };

                                                                   xhr.onerror = function() {
                                                                       console.error("Error occurred during request.");
                                                                   };

                                                                   xhr.send();
                                                               }

                                                               // Modal functionality
                                                               const modal = document.getElementById("login-modal");
                                                               const loginBtn = document.getElementById("login-btn");
                                                               const closeBtn = document.querySelector(".close");

                                                               loginBtn.addEventListener("click", function() {
                                                                   modal.style.display = "block";
                                                               });

                                                               closeBtn.addEventListener("click", function() {
                                                                   modal.style.display = "none";
                                                               });

                                                               window.addEventListener("click", function(event) {
                                                                   if (event.target == modal) {
                                                                       modal.style.display = "none";
                                                                   }
                                                               });

                                                               document.getElementById("login-form").addEventListener("submit", function(event) {
                                                                   event.preventDefault();
                                                                   const username = document.getElementById("username").value;
                                                                   const password = document.getElementById("password").value;
                                                                   console.log("Logging in with", username, password);
                                                                   modal.style.display = "none";
                                                               });

                                                               // Comment section functionality
                                                               document.getElementById("comment-form").addEventListener("submit", function(event) {
                                                                   event.preventDefault();
                                                                   const commentText = document.getElementById("comment-text").value;

                                                                   if (commentText.trim() !== "") {
                                                                       const commentContainer = document.getElementById("comments-container");
                                                                       const newComment = document.createElement("div");
                                                                       newComment.classList.add("comment");
                                                                       newComment.textContent = commentText;

                                                                       commentContainer.appendChild(newComment);
                                                                       document.getElementById("comment-form").reset();
                                                                   }
                                                               });
                                                           });
