import { Controller } from "@hotwired/stimulus"
let list_filters = new Set()

export default class extends Controller {
  static targets = [ "allItem", "buttonCount", "textCount" ]

  connect() {
    this.highlightAllButton()
  }

  toggleFilter(e){ 
    const nameFilter = e.currentTarget.getAttribute('data-filter-name')
    const buttonClicked = e.currentTarget
    const isActive = list_filters.has(nameFilter)

    if (nameFilter === "Todos") {
      this.clearAllFilters()
      this.highlightAllButton()
      return
    }

    this.removeAllButtonHighlight()

    this.toggleButtonStyles(buttonClicked, !isActive)
    this.toggleFilterInList(nameFilter, isActive)
    this.updateFilterCount()

    if (list_filters.size === 0) {
      this.highlightAllButton()
    }
  }

  clearAllFilters() {
    const allButtons = this.element.querySelectorAll('[data-filter-name]:not([data-filter-name="Todos"])')
    allButtons.forEach(button => {
      this.toggleButtonStyles(button, false)
    })
    list_filters.clear()
  }

  highlightAllButton() {
    const allButton = this.element.querySelector('[data-filter-name="Todos"]')
    if (allButton) {
      this.toggleButtonStyles(allButton, true)
    }
    this.buttonCountTarget.classList.add('hidden')
  }

  removeAllButtonHighlight() {
    const allButton = this.element.querySelector('[data-filter-name="Todos"]')
    if (allButton) {
      this.toggleButtonStyles(allButton, false)
    }
  }

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