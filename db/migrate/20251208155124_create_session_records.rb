class CreateSessionRecords < ActiveRecord::Migration[8.1]
  def change
    create_table :session_records do |t|
      t.string :title
      t.string :subtitle
      t.string :description
      t.decimal :session_duration

      t.timestamps
    end
  end
end
