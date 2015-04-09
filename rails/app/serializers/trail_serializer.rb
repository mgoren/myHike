class TrailSerializer < ActiveModel::Serializer
  attributes :id, :name, :location, :description, :latitude, :longitude
end
