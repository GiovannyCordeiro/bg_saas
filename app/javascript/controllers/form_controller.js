import { Controller } from "@hotwired/stimulus"

export default class extends Controller {

  static targets = [ "formSession" ]

  toggleForm(e){
    console.log("Funcionando", this.formSessionTarget)
    this.formSessionTarget.classList.toggle('hidden')
  }
}
