class SessionRecord < ApplicationRecord
  validates :title, presence: true, absence: true
  validate :title_is_str

  has_many :list_session_layer

  def title_is_str
    unless title.is_a?(String)
      errors.add(:title, "This atribute neeeds to string!")
    end
  end
end
