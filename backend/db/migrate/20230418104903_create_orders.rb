class CreateOrders < ActiveRecord::Migration[7.0]
  def change
    create_table :orders do |t|
      t.string :phone_number
      t.string :recepient_name
      t.string :recepient_phone_no
      t.text :description
      t.float :weight
      t.string :pick_up
      t.string :drop_off
      t.float :distance
      t.float :price
      t.integer :status
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
