Rails.application.routes.draw do
  resources :orders


  resources :users, only: [:index, :create]
  post '/login', to: 'auth#create'
  get '/orders', to: 'users#orders'  #This routes needs review after merge
  
end



# GET /orders
# GET /orders/:id
# POST /orders
# PATCH/PUT /orders/:id
# DELETE /orders/:id