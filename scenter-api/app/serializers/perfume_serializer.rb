class PerfumeSerializer < ActiveModel::Serializer
  attributes :id, :name, :image_url, :likes, :dislikes
  has_many :comments
end
