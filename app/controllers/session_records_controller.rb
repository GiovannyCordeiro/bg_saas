class SessionRecordsController < ApplicationController
  def index
    @filters = [
      { label: "Todos", icon: "🌟" },
      { label: "Família", icon: "❤️" },
      { label: "Amigos", icon: "👥" }
    ]

    @session_record = SessionRecord.new
  end
end
