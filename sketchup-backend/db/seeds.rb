require 'faker'

Image.destroy_all
User.destroy_all

10.times do 
    User.create({ username: Faker::Name.first_name, password: "123" })
end

20.times do 
    Image.create({ 
        user_id: User.all.sample.id, 
        title: Faker::Books::Dune.title, 
        image: Faker::Avatar.image
    })
end