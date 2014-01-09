JournalApp::Application.routes.draw do
  namespace "api", :default => :json do
    resources :posts, :only => [:index, :create, :update, :show, :destroy]
  end

  root :to => "site#index"

end
