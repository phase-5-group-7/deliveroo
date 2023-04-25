Rails.application.routes.draw do
  resources :orders

  # Defines the root path route ("/")
  # root "articles#index"

  resources :users, only: [:index, :create]
  post '/login', to: 'auth#create'
  get '/orders', to: 'users#orders'  #This routes needs review after merge
  get '/me', to: 'users#me'
end

  
