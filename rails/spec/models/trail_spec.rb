require 'rails_helper'

describe Trail do
  it { should have_many :ratings }
  it { should have_many(:users).through :ratings }
  it { should validate_presence_of :address }

  it "populates the coordinates based on address" do
    trail = Trail.create(address: "208 SW 5th Ave, Portland, OR")
    expect(trail.latitude).to eq(45.5218383)
  end
end
