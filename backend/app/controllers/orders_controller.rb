class OrdersController < ApplicationController

    def index
        @orders = Order.all
        render json: @orders
    end

    def show
        @order = Order.find(params[:id])
        render json: @order
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
        if @order.destroy
          render json: { message: 'Order deleted successfully' }
        else
          render json: { error: 'Unable to delete order' }, status: :unprocessable_entity
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
        #   "phone_number": 71111111,
        #   "recepient_name": "vinus",
        #   "recepient_phone_number": 72222222,
        #   "description": "Fragile",
        #   "weight": 240.0,
        #   "drop_off": "ngong",
        #   "pick_up": "dago",
        #   "distance": 30.0,
        #   "price": 300.0,
        #   "status": "ongoing",
        #   "user_id": 1
        # }
        
end
