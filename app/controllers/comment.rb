get '/comment/:id/new' do
  protected!
  @receiver = User.find(params[:id])
  erb :'comment/new'
end

post '/comment/:receiver_id/new' do |receiver_id|
  @receiver_comments = []
  @comment = Comment.new(params[:comment])
  @comment.receiver_id = receiver_id.to_i
  @comment.sender_id = session[:user_id]
  @comment.save
  @receiver_comments << @comment

  erb :'/comment/all', locals: {comments: Comment.all, page_owner: params[:receiver_id].to_i}, layout: false
end

get '/comment/:comment_id/edit' do
  @comment = Comment.find(params[:comment_id])
  erb :'/comment/update'
end

put '/comment/:comment_id' do
  comment = Comment.find(params[:comment_id])
  user = comment.receiver_id
  if comment.update(params[:comment])
    redirect to("/user/#{user}")
  else
    redirect("/comment/#{comment.id}/edit")
  end
end

delete '/comment/:comment_id' do
  comment = Comment.find(params[:comment_id])
  user = comment.receiver_id
  comment.destroy
  redirect to("/user/#{user}")
end

