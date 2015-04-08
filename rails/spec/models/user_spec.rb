require 'rails_helper'

describe User do
  it { should have_many :ratings }
  it { should have_many(:trails).through :ratings }
end
