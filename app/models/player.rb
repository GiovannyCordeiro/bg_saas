class Player < ApplicationRecord
  # name - string

  validates :name, presence: true

  has_many :list_session_player
end
