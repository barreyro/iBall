class User < ActiveRecord::Base
  has_secure_password
  validates :username, :presence => true
  validates :email, :uniqueness => true

  has_many :friendships, :foreign_key => 'friendee'
  has_many :friendships, :foreign_key => 'friend'

  has_many :comments
end
