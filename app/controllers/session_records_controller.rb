class SessionRecordsController < ApplicationController
  def index
    @filters = {
      todos: { label: "Todos", icon: "❤️", color: "pink" },
      familia: { label: "Família", icon: "❤️", color: "pink" },
      amigos: { label: "Amigos", icon: "👥", color: "blue" }
    }
  end
end
