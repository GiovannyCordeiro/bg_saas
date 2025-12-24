class CreateGames < ActiveRecord::Migration[8.1]
  def change
    create_table :games do |t|
      t.text :title, null: false
      t.text :category

      t.timestamps
    end
  end
end
