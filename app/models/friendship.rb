class Friendship < ActiveRecord::Base
  belongs_to :friendee, class_name: "User"
  belongs_to :friend,   class_name: 'User'
end
