class BrandSerializer < ActiveModel::Serializer
  attributes :id, :name, :image_url
  has_many :perfumes
end
