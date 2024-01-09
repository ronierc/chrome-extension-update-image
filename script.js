const form = document.querySelector('form');
const input = document.querySelector('.input');

const replaceImages = (url) => {
    const images = document.querySelectorAll('img');

    images.forEach((image) => image.src = url); // Pega o URL do imput e substitui todas as imagens
}

form.addEventListener('submit', async (event) => {
    event.preventDefault(); // Função para não atualizar a página quando botão for clicado

    const [tab] = await chrome.tabs.query({ active : true, currentWindow: true })

    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: replaceImages,
        args: [input.value] //passando o input como argumento na function acima - URL da replaceImages
    });
});