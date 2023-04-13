class CreateOrders < ActiveRecord::Migration[7.0]
  def change
    create_table :orders do |t|
      t.string :username, null: false
      t.integer :phone_number
      t.string :recepient_name, null: false
      t.integer :recepient_phone_number, null: false
      t.text :description
      t.float :weight
      t.text :drop_off
      t.text :pick_up
      t.float :distance, null: false
      t.float :price, null: false
      t.string :status, null: false
      t.integer :user_id, null: false
     


      t.timestamps
    end
  end
end
