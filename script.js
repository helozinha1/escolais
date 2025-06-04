// script.js

document.addEventListener('DOMContentLoaded', function() {
    // Carrossel de Banners
    const carousel = document.querySelector('.carousel');
    if (carousel) { // Verifica se o carrossel existe na página
        const images = carousel.querySelectorAll('img');
        let currentIndex = 0;

        function showImage(index) {
            images.forEach((img, i) => {
                if (i === index) {
                    img.classList.add('active'); // Adiciona a classe 'active' para mostrar a imagem
                } else {
                    img.classList.remove('active'); // Remove a classe 'active' das outras imagens
                }
            });
        }

        function nextImage() {
            currentIndex = (currentIndex + 1) % images.length;
            showImage(currentIndex);
        }

        // Mostra a primeira imagem ao carregar
        if (images.length > 0) {
            showImage(currentIndex);
        }

        // Mudar de imagem a cada 5 segundos (5000 milissegundos)
        setInterval(nextImage, 5000);
    }
});
// Crie um arquivo JavaScript (ex: script.js) e linke-o no seu HTML antes do fechamento da tag </body>
// <script src="script.js"></script>

document.addEventListener('DOMContentLoaded', () => {
    const themeToggleBtn = document.getElementById('theme-toggle');
    const body = document.body;
    const currentTheme = localStorage.getItem('theme'); // Verifica se há um tema salvo

    // Função para aplicar o tema
    const applyTheme = (theme) => {
        if (theme === 'dark') {
            body.classList.add('dark-mode');
            themeToggleBtn.innerHTML = '<i class="fas fa-sun"></i>'; // Muda para ícone de sol
            themeToggleBtn.setAttribute('aria-label', 'Alternar tema claro');
        } else {
            body.classList.remove('dark-mode');
            themeToggleBtn.innerHTML = '<i class="fas fa-moon"></i>'; // Muda para ícone de lua
            themeToggleBtn.setAttribute('aria-label', 'Alternar tema escuro');
        }
    };

    // Aplica o tema salvo ao carregar a página
    if (currentTheme) {
        applyTheme(currentTheme);
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        // Se não houver tema salvo, verifica a preferência do sistema operacional
        applyTheme('dark');
    }

    // Adiciona o evento de clique ao botão
    themeToggleBtn.addEventListener('click', () => {
        if (body.classList.contains('dark-mode')) {
            applyTheme('light');
            localStorage.setItem('theme', 'light');
        } else {
            applyTheme('dark');
            localStorage.setItem('theme', 'dark');
        }
    });
});