Rails.application.routes.draw do
  
  namespace :api do
    namespace :v1 do 
      resources :brands do
        resources :perfumes do
          resources :comments
        end
      end
    end
  end

end
