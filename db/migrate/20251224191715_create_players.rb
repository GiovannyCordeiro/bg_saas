class CreatePlayers < ActiveRecord::Migration[8.1]
  def change
    create_table :players do |t|
      t.text :name, null: false

      t.timestamps
    end
  end
end
