class CreateListSessionGames < ActiveRecord::Migration[8.1]
  def change
    create_table :list_session_games do |t|
      t.references :session_record, null: false, foreign_key: true
      t.references :game, null: false, foreign_key: true

      t.timestamps
    end
  end
end
