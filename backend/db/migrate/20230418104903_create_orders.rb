class CreateOrders < ActiveRecord::Migration[7.0]
  def change
    create_table :orders do |t|
        t.string :phone_number, null: false
        t.string :recepient_name, null: false
        t.string :recepient_phone_no, null: false
        t.text :description, null: false
        t.float :weight, null: false
        t.string :pick_up, null: false
        t.string :delivery_drop_off, null: false
        t.integer :distance, null: false
        t.integer :price, default: 0
        t.integer :order_status, default: 0
        t.integer :routeamount, null: false
        t.belongs_to :user, null: false, foreign_key: true

        t.timestamps
    end
  end
end
