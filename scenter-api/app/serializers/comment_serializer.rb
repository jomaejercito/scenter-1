class CommentSerializer < ActiveModel::Serializer
  attributes :id, :review, :reviewer, :perfume_id
end
