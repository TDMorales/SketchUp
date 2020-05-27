class ApplicationController < ActionController::API
    # skip_before_action :verify_authenticity_token

    def current_user
        User.find(session[:user_id])
    end

    def logout 
        session.clear
    end

end
