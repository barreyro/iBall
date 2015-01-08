post '/addfriend/:user' do |user|
  Friendship.create(friend: User.find(user.to_i), friendee_id: current_user.id)
  redirect '/'
end
