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
