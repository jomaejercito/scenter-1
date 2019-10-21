class Perfume < ApplicationRecord
  has_many :comments
  belongs_to :brand

  validates :name, presence: true
end
