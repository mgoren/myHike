Rails.application.routes.draw do
  root to: 'trails#index'

  devise_for :users, controllers: { sessions: 'sessions' }
  resources :trails
end
