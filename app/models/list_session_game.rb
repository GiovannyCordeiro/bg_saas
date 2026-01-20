class ListSessionGame < ApplicationRecord
  # session_record - references
  # game - references

  belongs_to :session_record
  belongs_to :game
end
