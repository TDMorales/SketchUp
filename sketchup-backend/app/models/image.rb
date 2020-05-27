class Image < ApplicationRecord
    include Rails.application.routes.url_helpers 
    
    has_one_attached :image
    belongs_to :user


    def url
        begin
            url_for(self.image)
        rescue => error
            nil
        end 
    end 

end
