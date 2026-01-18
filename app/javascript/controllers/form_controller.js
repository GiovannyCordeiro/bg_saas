import { Controller } from "@hotwired/stimulus"

const playersName = new Set();
const gamesName = new Set();

export default class extends Controller {
  static targets = [ 
      "formSession", "inputFile", "choiceImage", 
      "selectedImage", "inputAddPlayer", "hiddenFieldListPlayerSession", 
      "inputAddGame", "sessionGameListHiddenField", "wrapperListPlayers",
      "wrapperGames"];

  toggleForm(e){
    this.formSessionTarget.classList.toggle('hidden');
  }

  uploadInputFile(){
    this.inputFileTarget.click();
  }

  newImageUpload(e){
    const file = e.target.files[0];

    this.nameImageValidation(file);

    if(this.selectedImageTarget.querySelector('img').src != ''){
      const reader = new FileReader();
      this.toggleImage(e, file);
      return;
    }

    const reader = new FileReader();

    this.toggleImage(e, file);
    this.toggleStyle(e);

    reader.readAsDataURL(file);
  }

  nameImageValidation(file){
    if (!file && !(file.type.startsWith('image/'))){
      throw new TypeError("TIpo de imagem invalido");
    }
  }

  toggleImage(e, file){
    const reader = new FileReader();

      reader.onload = (e) => {
        const imageHtml = this.selectedImageTarget.querySelector('img');
        imageHtml.src = e.target.result;
      }
      reader.readAsDataURL(file);
  }

  toggleStyle(e){
    this.selectedImageTarget.src = e.target.result;
    this.choiceImageTarget.classList.toggle("hidden");
    this.selectedImageTarget.classList.toggle("hidden");
  }

  // Logic for adding players and games will be implemented here

  addNamePlayer(e){
    if (e.key == "Enter" || e.type == "click"){
      e.preventDefault();
      const namePlayer = this.inputAddPlayerTarget.value.trim();
      playersName.add(namePlayer);

      this.inputAddPlayerTarget.value = "";
      this.updateHiddenInputPlayer();
      this.updateDisplayPlayerNames();
    }
  }

  removePlayerName(e){
    e.preventDefault();
    playersName.delete(e.currentTarget.dataset.name);

    this.updateDisplayPlayerNames();
    this.updateHiddenInputPlayer();
  }

  updateHiddenInputPlayer(){
    this.hiddenFieldListPlayerSessionTarget.value = JSON.stringify(Array.from(playersName));
  }

  updateDisplayPlayerNames(){
    const listPlayersNameHTML = [];
    playersName.forEach(name => {
      const divPlayer = `<button type="button" data-name="${name}" data-action="click->form#removePlayerName" class="inline-flex items-center gap-2 bg-green-200 text-gray-700 px-4 py-2 rounded-full cursor-pointer">
              <p class="text-sm font-medium">${name}</p>
              <div class="text-gray-600 hover:text-gray-800">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"/>
                  </svg>
              </div>
            </button>`;
      listPlayersNameHTML.push(divPlayer);
    });

    const stringElements = listPlayersNameHTML.join(' ');

    this.wrapperListPlayersTarget.innerHTML = stringElements;
  }

    addNameGame(e){
    if (e.key == "Enter" || e.type == "click"){
      e.preventDefault();

      const nameGame = this.inputAddGameTarget.value.trim();
      gamesName.add(nameGame);

      this.inputAddGameTarget.value = "";
      this.updateHiddenInputGames();
      this.updateDisplayGames();
    }
  }

  removeGameName(e){
    gamesName.delete(e.currentTarget.dataset.name);

    this.updateDisplayGames();
    this.updateHiddenInputGames();
  }

  updateHiddenInputGames(){
    this.sessionGameListHiddenFieldTarget.value = JSON.stringify(Array.from(gamesName));
  }

  updateDisplayGames(){
    const listGamesHTML = [];
    gamesName.forEach(nameGame => {
      const gameElement = `<button type="button" data-name="${nameGame}" data-action="click->form#removeGameName" class="flex gap-2 items-center px-4 px-4 py-2 text-sm bg-white text-orange-600 rounded-full font-medium cursor-pointer hover:bg-orange-100 transition-colors border-2 border-orange-400">
            ${nameGame}
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"/>
            </svg>
          </button>`;
      listGamesHTML.push(gameElement);
    })

    this.wrapperGamesTarget.innerHTML = listGamesHTML.join(' ');
  }

}
