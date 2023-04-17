class Order < ApplicationRecord
    belongs_to :user

  validates :username, :phone_number, :recepient_name, :recepient_phone_number, presence: true
  validates :weight, :distance, :price, numericality: { greater_than_or_equal_to: 0 }
end
