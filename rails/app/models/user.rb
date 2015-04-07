class User < ActiveRecord::Base
  has_many :ratings
  has_many :trails, through: :ratings

  before_save :ensure_authentication_token

  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  def ensure_authentication_token
    if authentication_token.blank?
      self.authentication_token = generate_authentication_token
    end
  end

private
  def generate_authentication_token
    loop do
      token = Devise.friendly_token
      break token unless User.where(authentication_token: token).first
    end
  end
end
