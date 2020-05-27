class ImagesController < ApplicationController

    def index
        images = Image.all 
        render(json: images, include: [:user])
    end

    def create
        image = Image.create(
            title: params[:newImageTitle],
            image: params[:newImage],
            user_id: current_user.id
        )
    end 
end
