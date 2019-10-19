class Comment < ApplicationRecord
  belongs_to :perfume

  validates :review, presence: true
  validates :reviewer, presence: true
  validates :perfume_id, presence: true
end
