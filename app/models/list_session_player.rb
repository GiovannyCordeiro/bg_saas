class ListSessionPlayer < ApplicationRecord
  belongs_to :session_record
  belongs_to :player
end
