class Order < ApplicationRecord
  belongs_to :user

  before_save :price
  
  enum :order_status, [:ONGOING, :DELIVERED]
  


    private
    def price
      # price = routeamount*distance
    end

end
