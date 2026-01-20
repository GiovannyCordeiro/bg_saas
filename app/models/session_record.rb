class SessionRecord < ApplicationRecord
  # Title - string
  # subtitle - string
  # description - string
  # session_duration - decimal

  validates :title, presence: true
  validate :title_is_str

  has_many :list_session_player
  has_many :list_session_game

  has_one_attached :image

  def title_is_str
    unless title.is_a?(String)
      errors.add(:title, "This atribute neeeds to string!")
    end
  end
end
