class ImagesController < ApplicationController

    def index
        images = Image.all 
        render(json: images, include: [:user])
    end

    # def create
    #     image = Image.create (
    #         title: params[:title],
    #         image: params[:image]
    #     )
    # end 
end
