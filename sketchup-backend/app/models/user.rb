class User < ApplicationRecord
    has_many :images
    has_secure_password

    validates :username, presence: true
    validates :username, uniqueness: true
    
end
