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

    basic_session_params = session_record_params.except(:list_session_player, :list_session_game)
    @session_record = SessionRecord.new(basic_session_params)

    if @session_record.save
      redirect_to session_records_path
    else
      puts "Erros: #{@session_record.errors.full_messages}"
      render :index
    end

    # Salvando jogadores e referencia da sessao (2 acoplamentos, tirar isso depois)
    session_record_params[:list_session_player].each do |player_name|
      saved_player = Player.create(name: player_name)
      @session_record.list_session_player.create(player: saved_player)
    end

    # Salvando nome do jogo e referencia para sessao (2 acoplamento, tirar depois e colocar seus repectivos testes)
    session_record_params[:list_session_game].each do |game_name|
      game_saved = Game.create(title: game_name)
      @session_record.list_session_game.create(game: game_saved)
    end



    # puts "Lists players: #{list_session_player_params}"E
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
        :image,
        list_session_player: [],
        list_session_game: [],
      )
  end
end
