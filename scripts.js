document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var mensagem = document.getElementById("mensagem").value;


    console.log("Nome: " + nome);
    console.log("Email: " + email);
    console.log("Mensagem: " + mensagem);
});

function openContactForm() {
    window.location.href = "contato.html";
}

function toggleNav() {
    const nav = document.querySelector('.navbar-collapse');
    nav.classList.toggle('show');
}

function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    if (name === '' || email === '') {
        alert('Por favor, preencha todos os campos do formulário.');
        return false;
    }

    return true;
}

function smoothScroll(target) {
    document.querySelector(target).scrollIntoView({
        behavior: 'smooth'
    });
}

let currentIndex = 0;

function showSlide(index) {

}

function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    showSlide(currentIndex);
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    showSlide(currentIndex);
}


