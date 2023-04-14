Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  resources :users, only: [:index, :create]
  post '/login', to: 'auth#create'
  get '/orders', to: 'users#orders'  #This routes needs review after merge
  
end
