class CreatePerfumes < ActiveRecord::Migration[6.0]
  def change
    create_table :perfumes do |t|
      t.string :name
      t.string :image_url
      t.integer :likes
      t.integer :dislikes
      t.integer :brand_id

      t.timestamps
    end
  end
end
