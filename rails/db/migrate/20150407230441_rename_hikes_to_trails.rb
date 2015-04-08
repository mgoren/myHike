class RenameHikesToTrails < ActiveRecord::Migration
  def change
    drop_table :hikes
    
    create_table :trails do |t|
      t.string :name
      t.text :description
      t.float :latitude
      t.float :longitude
      t.string :location

      t.timestamps
    end
  end
end
