class AuthenticationController < ApplicationController

    def login
        # check to see if the username is in our date base
        # AND if the user password is correct
        user = User.find_by({ username: params[:username]})
        images = user.images
        if(user && user.authenticate(params[:password]))
            # byebug
            # set the current user to the user we logged in
            session[:user_id] = user.id
            # return the appropriate user
            render json: { user: user, success: true, id: user.id, images: images.as_json({ methods: [ :url ]}), :methods => :url, include: [:user] }
           
        else
            render json: {  success: false, id: nil }
        end
    end

    def logout
        # reset_session
        session.clear
        session[:user_id] = nil
        # byebug
        render json: { status: 200, logged_out: true }
    end

    def destroy
        logout!
        render json: {
          status: 200,
          logged_out: true
        }
      end

    def signUp
        # byebug
        if(!User.find_by({ username: params[:username]}))
            # byebug
            user = User.create({
                username: params[:username],
                password: params[:password]
            })
            # byebug
            session[:user_id] = user.id
            render json: { success: true, id: user.id }
        else
            render json: { success: false, id: nil}

        end
    end


end