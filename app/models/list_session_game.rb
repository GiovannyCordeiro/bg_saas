class ListSessionGame < ApplicationRecord
  belongs_to :session_record
  belongs_to :game
end
