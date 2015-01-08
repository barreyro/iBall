get '/' do
  @users = User.all
  @friendships
  erb :index
end
