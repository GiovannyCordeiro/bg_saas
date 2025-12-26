# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[8.1].define(version: 2025_12_24_193700) do
  create_table "games", force: :cascade do |t|
    t.text "category"
    t.datetime "created_at", null: false
    t.text "title", null: false
    t.datetime "updated_at", null: false
  end

  create_table "list_session_players", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.integer "player_id", null: false
    t.integer "session_record_id", null: false
    t.datetime "updated_at", null: false
    t.index ["player_id"], name: "index_list_session_players_on_player_id"
    t.index ["session_record_id"], name: "index_list_session_players_on_session_record_id"
  end

  create_table "players", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.text "name", null: false
    t.datetime "updated_at", null: false
  end

  create_table "session_records", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.string "description"
    t.decimal "session_duration"
    t.string "subtitle"
    t.string "title"
    t.datetime "updated_at", null: false
  end

  add_foreign_key "list_session_players", "players"
  add_foreign_key "list_session_players", "session_records"
end
