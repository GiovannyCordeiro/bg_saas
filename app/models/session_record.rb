class SessionRecord < ApplicationRecord
  validates :title, presence: true, absence: true
  validate :title_is_str

  def title_is_str
    unless title.is_a?(String)
      errors.add(:title, "This atribute neeeds to string!")
    end
  end
end
