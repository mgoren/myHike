require 'rails_helper'

describe Trail do
  it { should have_many :ratings }
  it { should have_many(:users).through :ratings }
end
