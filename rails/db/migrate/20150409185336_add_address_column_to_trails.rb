class AddAddressColumnToTrails < ActiveRecord::Migration
  def change
    add_column :trails, :address, :string
  end
end
