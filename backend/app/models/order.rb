class Order < ApplicationRecord
  belongs_to :user

  enum :status, [:ONGOING, :DELIVERED ]
end
