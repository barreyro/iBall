get '/comment/:id/new' do
  protected!
  @receiver = User.find(id)
  erb :'comment/new'
end

post '/comment/:receiver_id/new' do |receiver_id|
  @receiver_comments = []
  @allComments = Comment.all
  @comment = Comment.new(params[:comment])
  @comment.receiver_id = receiver_id.to_i
  @comment.sender_id = session[:user_id]
  @comment.save
  @receiver_comments << @comment
  erb :'comment/all'
end


