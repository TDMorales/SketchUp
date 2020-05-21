class UsersController < ApplicationController
    before_action :define_current_user 

    def index 
        users = User.all 
        render(json: users) 
    end

    def create
        user = User.create(user_params)
        render(json: user)
    end

    def show 
        render(json: current_user, include: [:images])
    end

    def user_params
        params.permit(:username)
    end

    def define_current_user
       
        if(params[:id])
            @current_user = User.find(params[:id])
        else
            @current_user = User.new
        end
    end

    def current_user
        @current_user
    end

end
