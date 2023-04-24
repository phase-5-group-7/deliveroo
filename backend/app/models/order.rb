class Order < ApplicationRecord
  belongs_to :user

  before_save :price
  
  enum :order_status, [:ONGOING, :DELIVERED]
  # enum :pick_up, [:ngong, :karen, :rongai, :cbd, :langata]
  # enum :delivery_drop_off, [:Ngong, :Karen, :Rongai, :Cbd, :Langata]
  # enum :routes, [:ngong_karen, :karen_rongai, :rongai_cbd, :cbd_langata, :ngong_rongai, :ngong_cbd, :ngong_langata, :karen_cbd, :karen_langata, :rongai_langata]
  enum :routeamount, { 200 => 1, 500=> 2, 800=> 3, 600=> 4, 1200=> 5, 1500=> 6, 700=> 7, 400=> 8, 750=> 9, 1300=> 10 }
  enum :distance, { 10=>1, 15=> 2, 20=> 3, 25=> 4, 30=> 5, 35=> 6, 40=> 7, 45=> 8, 50=> 9, 55=> 10 }
  


    private
    def price
      price = routeamount*distance
    end

end
