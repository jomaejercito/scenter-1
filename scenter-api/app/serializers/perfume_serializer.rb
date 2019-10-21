class PerfumeSerializer < ActiveModel::Serializer
  attributes :id, :name, :image_url, :likes, :dislikes
  has_many :comments
  belongs_to :brand
end
