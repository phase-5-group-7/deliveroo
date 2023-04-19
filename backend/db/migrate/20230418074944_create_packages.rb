class CreatePackages < ActiveRecord::Migration[7.0]
  def change
    create_table :packages do |t|
      t.string :title
      t.string :destination
      t.belongs_to :person, null: false, foreign_key: true

      t.timestamps
    end
  end
end
