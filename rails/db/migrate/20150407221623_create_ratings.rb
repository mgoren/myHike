class CreateRatings < ActiveRecord::Migration
  def change
    create_table :ratings do |t|
      t.integer :user_id
      t.integer :hike_id
      t.integer :difficulty
      t.integer :funness
      t.text :notes

      t.timestamps
    end
  end
end
