get '/' do
  @users = User.all
  @friendships = Friendship.all
  erb :index
end
