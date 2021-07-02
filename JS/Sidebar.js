document.addEventListener("DOMContentLoaded", function(event) {
    const btnToggle = document.querySelector('.toggle-btn');

    btnToggle.addEventListener('click', function(){
        document.getElementById('sidebar').classList.toggle('active');
    });
});
