class SessionRecordsController < ApplicationController
  def index
    @filters = [
      { label: "Todos", icon: "🌟" },
      { label: "Família", icon: "❤️" },
      { label: "Amigos", icon: "👥" }
    ]

    @session_record = SessionRecord.new

    @sessions_list = SessionRecord.all
  end

  def create
    @filters = [
      { label: "Todos", icon: "🌟" },
      { label: "Família", icon: "❤️" },
      { label: "Amigos", icon: "👥" }
    ]

    @session_record = SessionRecord.new(session_record_params)

    if @session_record.save
      redirect_to session_records_path
    else
      puts "Erros: #{@session_record.errors.full_messages}"
      render :index
    end
  end

  def show
    @session = SessionRecord.find(params[:id])
  end

  def edit
    @session = SessionRecord.find(params[:id])
  end

  private

  def session_record_params
    # preciso colocar os atributos de lista de jogadores e lista de jogos!

    params.require(:session_record).permit(
        :title,
        :subtitle,
        :description,
        :session_duration,
        :image
      )
  end
end
