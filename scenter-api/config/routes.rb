Rails.application.routes.draw do
  
  resources :comments
  namespace :api do
    namespace :v1 do 
      resources :perfumes do
        resources :comments
      end
    end
  end

end
