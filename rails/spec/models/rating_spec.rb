require 'rails_helper'

describe Rating do
  it { should belong_to :user }
  it { should belong_to :trail }
end
