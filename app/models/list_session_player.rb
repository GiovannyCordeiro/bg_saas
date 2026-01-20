class ListSessionPlayer < ApplicationRecord
  # session_record - references
  # player - references

  belongs_to :session_record
  belongs_to :player
end
