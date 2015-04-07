class Trail < ActiveRecord::Base
  has_many :ratings
  has_many :users, through: :ratings

  validates :location, presence: true

  geocoded_by :location
  after_validation :geocode
end
