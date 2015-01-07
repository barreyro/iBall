class User < ActiveRecord::Base
  has_secure_password
  validates :username
  validates :email, :uniqueness => true

  has_many :friendships, :foreign_key => 'friendee'
  has_many :friendships, :foreign_key => 'friend'
end
