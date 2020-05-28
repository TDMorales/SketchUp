Rails.application.routes.draw do
  default_url_options :host => 'localhost:3000'

  resources :images
  resources :users, only: [:create, :show, :index]

  
  post('/login', to: 'authentication#login')
  get('/login', to: 'authentication#login')

  post('/logout', to: 'authentication#logout')
  get('/logout', to: 'authentication#logout')

  delete '/logout', to: 'authentication#destroy'

  get('/get_user', to: 'users#get_user')

  post('/signUp', to: 'authentication#signUp')
  get('/signUp', to: 'authentication#signUp')

  post('/images/create', to: 'images#create')
  

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
