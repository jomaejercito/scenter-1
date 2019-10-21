class Brand < ApplicationRecord
  has_many :perfumes

  validates :name, presence: true, uniqueness: true
end
