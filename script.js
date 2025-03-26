const toggleButton = document.getElementById('toggleButton')
const toggleDiv = document.getElementById('togglerDiv')

function handleToggleDiv() {
    toggleDiv.classList.toggle('hidden')
    toggleButton.classList.toggle('fa-bars')
    toggleButton.classList.toggle('fa-xmark')
}