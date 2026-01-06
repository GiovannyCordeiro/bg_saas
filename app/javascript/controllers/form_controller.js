import { Controller } from "@hotwired/stimulus"

const namePlayers = new Set();

export default class extends Controller {
  static targets = [ "formSession", "inputFile", "choiceImage", "selectedImage", "inputAddPlayer", "hiddenFieldListPlayerSession" ]

  toggleForm(e){
    this.formSessionTarget.classList.toggle('hidden')
  }

  uploadInputFile(){
    this.inputFileTarget.click()
  }

  newImageUpload(e){
    const file = e.target.files[0]

    this.nameImageValidation(file)

    if(this.selectedImageTarget.querySelector('img').src != ''){
      const reader = new FileReader();
      this.toggleImage(e, file)
      return;
    }

    const reader = new FileReader();

    this.toggleImage(e, file)
    this.toggleStyle(e)

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
        const imageHtml = this.selectedImageTarget.querySelector('img')
        imageHtml.src = e.target.result
      }
      reader.readAsDataURL(file);
  }

  toggleStyle(e){
    this.selectedImageTarget.src = e.target.result;
    this.choiceImageTarget.classList.toggle("hidden")
    this.selectedImageTarget.classList.toggle("hidden")
  }

  // Logic for adding players and games will be implemented here

  add(e){
    if (e.key == "Enter" || e.type == "click"){
      e.preventDefault();
      const namePlayer = this.inputAddPlayerTarget.value.trim();
      namePlayers.add(namePlayer);

      this.inputAddPlayerTarget.value = "";
      this.updateHiddenInput();

      console.log(namePlayers)
    }
  }

  updateHiddenInput(){
    this.hiddenFieldListPlayerSessionTarget.value = JSON.stringify(namePlayers)
    console.log(this.hiddenFieldListPlayerSessionTarget)
  }

  updateDisplay(){
    
  }

}
