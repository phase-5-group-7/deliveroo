class OrdersController < ApplicationController

    def index
        @orders = Order.all
        render json: @orders
    end

    def show
        @order = Order.find_by(id: params[:id])
        if @order
          render json: @order
        else 
          render json: { message: "Order not found" }
        end
    end

    def create
        @order = Order.new(order_params)
        if @order.save
          render json: @order, status: :created
        else
          render json: {error: "Unable to create order"}, status: :unprocessable_entity
        end
    end

    def update
      @order = Order.find(params[:id])
      if current_user.admin
        if @order.update(order_params)
          render json: { message: 'Order updated successfully', data: @order }
        else
          render json: { error: 'Unable to update order' }, status: :unprocessable_entity
        end

      else
        if @order.update(update_params)
          render json: { message: 'Order updated successfully', data: @order }
        else
          render json: { error: 'Unable to update order' }, status: :unprocessable_entity
        end
      end
    end

    def destroy
        @order = Order.find(params[:id])
        if @order.status == 'ONGOING'
          @order.destroy
            render json: { message: 'Order deleted successfully' }
          else
            render json: { error: 'Unable to delete order' }, status: :unprocessable_entity
          end
        else  
          render json: { message: "Your parcel has been delivered already!" }, status: :forbidden 
        end
    end


      private

    def order_params
        params.require(:order).permit(:phone_number, :recepient_name, :recepient_phone_no, :description, :weight, :drop_off, :pick_up, :distance, :price, :status, :user_id)
    end

    def update_params 
      params.require(:order).permit(:phone_number, :recepient_name, :recepient_phone_no, :description, :weight, :drop_off, :pick_up, :distance)
    end
    

    # Example of request to be sent to the server

          # {
          #   "phone_number": "071111111",
          #   "recepient_name": "vinus",
          #   "recepient_phone_no": "072222222",
          #   "description": "Fragile",
          #   "weight": 240.0,
          #   "drop_off": "ngong",
          #   "pick_up": "dago",
          #   "distance": 30.0,
          #   "price": 300.0,
          #   "status": 0,
          #   "user_id": 1
          # }
        
end
