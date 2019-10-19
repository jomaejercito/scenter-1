class CommentSerializer < ActiveModel::Serializer
  attributes :id, :review, :reviewer, :perfume_id
  belongs_to :perfume
end
