Rails.application.routes.draw do

  root to: 'trails#index'


  resources :users, only: [:index, :show] do
    resources :ratings, except: [:new, :edit]
  end

  devise_for :users, controllers: { sessions: 'sessions', registrations: 'registrations' }




  namespace :api do
    get :csrf, to: 'csrf#index'
    devise_scope :user do
      post "/users" => "registrations#create"
    end
    resources :trails, except: [:new, :edit]
  end

end
