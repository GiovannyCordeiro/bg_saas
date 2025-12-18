import { Controller } from "@hotwired/stimulus"

let list_filters = new Set()

export default class extends Controller {
  // Estilos para deixar o input em foco - ring-3 ring-[#ffb900] scale-105 
  static targets = [ "allItem", "buttonCount", "textCount" ]

  toggleFilter(e){ 
    const nameFilter = e.currentTarget.getAttribute('data-filter-name')
    const buttonClicked = e.currentTarget
    const isActive = list_filters.has(nameFilter)

    this.removeAllFilters(nameFilter)

    this.toggleButtonStyles(buttonClicked, !isActive)
    this.toggleFilterInList(nameFilter, isActive)
    this.updateFilterCount()
  }

  // removeAllFilters(name) {
  //   if (name === "Todos") {
  //     let allButtons = this.allItemTarget.querySelectorAll('[data-filter-name]')
  //     let [first, ...all]

  //     console.log(allButtons.shift())
  //   }
  // }

  toggleButtonStyles(button, shouldActivate) {
    const classes = ['ring-3', 'ring-[#ffb900]', 'scale-105']
    classes.forEach(cls => button.classList.toggle(cls, shouldActivate))
  }

  toggleFilterInList(name, isCurrentlyActive) {
    isCurrentlyActive ? list_filters.delete(name) : list_filters.add(name)
  }

  updateFilterCount() {
    const count = list_filters.size
    this.textCountTarget.textContent = `${count} ${count === 1 ? 'filtro ativo' : 'filtros ativos'}`
    this.buttonCountTarget.classList.toggle('hidden', count === 0)
  }
}