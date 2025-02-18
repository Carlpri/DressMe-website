function register() {
    var email = document.querySelector('#signup input').value;
    // Here you would typically send the email to your server or a mailing list
    console.log('Email for registration:', email);
    alert('Thank you for signing up!');
}
var submitBtn =document.getElementsById("Add to cart")
    container = document.querySelector(".container");
submitBtn.addEventListener("click", function(event){
    console.log('Added to cart!');
})