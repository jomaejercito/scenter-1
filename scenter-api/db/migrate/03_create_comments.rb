class CreateComments < ActiveRecord::Migration[6.0]
  def change
    create_table :comments do |t|
      t.string :review
      t.string :reviewer
      t.integer :perfume_id

      t.timestamps
    end
  end
end
