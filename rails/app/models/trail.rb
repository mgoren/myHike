class Trail < ActiveRecord::Base
  has_many :ratings
  has_many :users, through: :ratings

  validates :address, presence: true
  validates :name, presence: true

  geocoded_by :address
  after_validation :geocode
end
