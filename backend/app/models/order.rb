class Order < ApplicationRecord
    belongs_to :user

  validates :phone_number, :recepient_name, :recepient_phone_no, presence: true
  validates :weight, :distance, :price, numericality: { greater_than_or_equal_to: 0 }

  enum :status, [:ONGOING, :DELIVERED ]
end
