class Game < ApplicationRecord
  validates :title, presence: true

  has_many :list_session_game
end
