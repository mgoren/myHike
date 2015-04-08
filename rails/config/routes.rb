Rails.application.routes.draw do

  root to: 'trails#index'

  devise_for :users, controllers: { sessions: 'sessions' }

  resources :users do
    resources :ratings, except: [:new, :edit]
  end

  resources :trails, except: [:new, :edit]

  namespace :api do
    get :csrf, to: 'csrf#index'
  end

end
