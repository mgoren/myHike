class CreateHikes < ActiveRecord::Migration
  def change
    create_table :hikes do |t|
      t.string :name
      t.text :description
      t.float :latitude
      t.float :longitude
      t.string :location

      t.timestamps
    end
  end
end
