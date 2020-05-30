class ImagesController < ApplicationController

    def index
        images = Image.all 
        render(json: images, :methods => :url, include: [:user])

    end

    def create
        image = Image.create(
            title: params[:newImageTitle],
            image: params[:newImage],
            user_id: current_user.id,
            likes: 0
        )
    end 

    def show
        image = Image.find(params[:id])
        # render(json: image, include: :user)
        render(json: image, :methods => :url, include: [:user])
    end

    def destroy
        image = Image.find(params[:id])
        image.delete
    end

    def update 
        # byebug
        image = Image.find(params[:id])
        image.update({
            likes: params[:likes]
        })
        render(json:image)
    end

    # def create
    #     image = Image.create (
    #         title: params[:title],
    #         image: params[:image]
    #     )
    # end 
end
