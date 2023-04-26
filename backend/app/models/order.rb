class Order < ApplicationRecord
  belongs_to :user

  before_save :price
  
  enum :order_status, [:ONGOING, :DELIVERED]
  


    private
   
    def price
      min_price_weight = 410
      min_price_distance = 500
      if weight <= 5 && distance <= 2
        price = min_price_weight + min_price_distance
      elsif weight > 5 && distance > 2
        answer_weight = (weight - 5)
        answer_dist = (distance - 2)
        weight_dist_price = min_price_weight + min_price_distance
        price = weight_dist_price + (answer_weight * 30).abs + (answer_dist * 70).abs
      end
    end

end
