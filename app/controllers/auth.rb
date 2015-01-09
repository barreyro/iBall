get '/signup' do
  erb :'/user/sign_up'
end

post '/signup' do
  user = User.new(params[:user])
  if user.save
    session[:user_id] = user.id
    redirect '/'
  else
    redirect '/signup'
  end
end

get '/login' do
  erb :'/user/login'
end

post '/login' do
  @user = User.find_by(email: params[:user][:email])
  if @user && @user.authenticate(params[:user][:password])
    session[:user_id] = @user.id
    redirect '/'
  else
    redirect '/user/login'
  end
end

get '/logout' do
  session[:user_id] = nil
  redirect '/'
end

get '/user/:id' do |id|
  @all_comments = []
  Comment.all.each do |x|
    if x.receiver_id == id
      x
    end
  end
  protected!
  @page_owner = User.find(id)
  erb :'/user/profile'
end
