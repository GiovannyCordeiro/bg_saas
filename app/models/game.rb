class Game < ApplicationRecord
  # title - text
  # category - text

  validates :title, presence: true

  has_many :list_session_game
end
