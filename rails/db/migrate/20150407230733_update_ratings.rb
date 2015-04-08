class UpdateRatings < ActiveRecord::Migration
  def change
    remove_column :ratings, :hike_id
    add_column :ratings, :trail_id, :integer
  end
end
