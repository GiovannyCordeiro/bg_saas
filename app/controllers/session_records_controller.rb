class SessionRecordsController < ApplicationController
  def index
    @filters = [
      { label: "Todos", icon: "🌟" },
      { label: "Família", icon: "❤️" },
      { label: "Amigos", icon: "👥" }
    ]

    @session_record = SessionRecord.new
  end

  def create
    puts "PARMETROOO #{params}"
  end

  def session_record_params
    params.require(:session_record).permit(:image)
  end
end
